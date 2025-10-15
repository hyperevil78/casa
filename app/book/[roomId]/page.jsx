'use client';


import React, { useState, useEffect, useMemo } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, differenceInCalendarDays } from 'date-fns';
import { useUser } from '@clerk/nextjs'; // CORRECTED: Reverted to the correct package for Next.js

// Manually get roomId from the window's URL since 'next/navigation' is unavailable
const useRoomId = () => {
  const [roomId, setRoomId] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathParts = window.location.pathname.split('/');
      setRoomId(pathParts[pathParts.length - 1] || '');
    }
  }, []);
  return roomId;
};

const BookingPage = () => {
  const roomId = useRoomId();
  const { isSignedIn, isLoaded, user } = useUser();

  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [dateRange, setDateRange] = useState(undefined);
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  // Fetch room details when the component mounts
  useEffect(() => {
    if (roomId) {
      const fetchRoomDetails = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(`/api/rooms/${roomId}`);
          if (!response.ok) throw new Error('We could not find details for this room. It may be unavailable.');
          const data = await response.json();
          setRoom(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchRoomDetails();
    }
  }, [roomId]);

  // Calculate booking details in real-time
  const { numberOfNights, totalPrice } = useMemo(() => {
    if (dateRange?.from && dateRange?.to && room) {
      const nights = differenceInCalendarDays(dateRange.to, dateRange.from);
      if (nights > 0) {
        const price = nights * room.pricePerNight;
        return { numberOfNights: nights, totalPrice: price };
      }
    }
    return { numberOfNights: 0, totalPrice: 0 };
  }, [dateRange, room]);

  const handleBookNow = () => {
    if (!isSignedIn) {
      alert('Please sign in to complete your booking.');
      return;
    }
    // We will wire this up to the payment API in the next step
    console.log('Booking details:', {
      roomId,
      userId: user.id,
      checkIn: dateRange.from,
      checkOut: dateRange.to,
      guests: numberOfGuests,
      price: totalPrice,
    });
    alert('Proceeding to payment (not yet implemented).');
  };

  if (isLoading || !isLoaded) return <div className="text-center py-20">Loading Room Details...</div>;
  if (error) return <div className="text-center py-20 text-red-500 font-semibold">{error}</div>;
  if (!room) return <div className="text-center py-20">Could not find room details. Please try again.</div>;

  return (
    <>
      {/* IMPROVED UI: Added custom styles for the calendar */}
      <style>{`
        .rdp {
          --rdp-cell-size: 45px;
          --rdp-caption-font-size: 1.2rem;
          --rdp-accent-color: #d97706; /* Amber-600 */
          --rdp-background-color: #f59e0b; /* Amber-500 for selected day hover */
          --rdp-accent-color-dark: #f59e0b;
          --rdp-background-color-dark: #d97706;
          --rdp-outline: 2px solid var(--rdp-accent-color);
          --rdp-outline-selected: 3px solid var(--rdp-accent-color);
          margin: 1em 0;
        }
        .rdp-caption_label {
          font-weight: 700;
        }
        .rdp-head_cell {
          font-weight: 600;
          color: #4b5563; /* Gray-600 */
        }
        .dark .rdp-head_cell {
          color: #d1d5db; /* Gray-300 */
        }
        .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover {
          background-color: var(--rdp-accent-color);
          color: white;
          font-weight: bold;
        }
        .rdp-day_range_start, .rdp-day_range_end {
          background-color: var(--rdp-accent-color) !important;
          color: white !important;
        }
        .rdp-day_range_middle {
          background-color: #fef3c7 !important; /* Amber-100 */
          color: #92400e !important; /* Amber-900 */
        }
        .dark .rdp-day_range_middle {
           background-color: #78350f !important; /* Amber-900 */
           color: #fef3c7 !important; /* Amber-100 */
        }
      `}</style>
      <link rel="stylesheet" href="https://unpkg.com/react-day-picker/dist/style.css" />
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Book Your Stay</h1>
            <h2 className="mt-2 text-2xl font-bold text-amber-600">{room.name}</h2>
            
            <div className="mt-8 border-t dark:border-gray-700 pt-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Select Your Dates</h3>
              <div className="flex justify-center">
                <DayPicker
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  disabled={{ before: new Date() }}
                  className="text-gray-900 dark:text-white"
                />
              </div>
            </div>
            
            <div className="mt-8 border-t dark:border-gray-700 pt-6">
              <label htmlFor="guests" className="block text-xl font-semibold text-gray-800 dark:text-gray-100">
                Number of Guests
              </label>
              <select
                id="guests"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
                className="mt-2 w-full max-w-xs p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-amber-500 focus:border-amber-500"
              >
                {Array.from({ length: room.maxGuests }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg sticky top-28">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b dark:border-gray-700 pb-4">Booking Summary</h3>
              <div className="space-y-4 mt-4">
                <div className="flex justify-between">
                  <p className="text-gray-600 dark:text-gray-300">Check-in:</p>
                  <p className="font-semibold dark:text-white">{dateRange?.from ? format(dateRange.from, 'dd MMM yyyy') : 'Select date'}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600 dark:text-gray-300">Check-out:</p>
                  <p className="font-semibold dark:text-white">{dateRange?.to ? format(dateRange.to, 'dd MMM yyyy') : 'Select date'}</p>
                </div>
                <div className="flex justify-.between">
                  <p className="text-gray-600 dark:text-gray-300">Guests:</p>
                  <p className="font-semibold dark:text-white">{numberOfGuests}</p>
                </div>
                <div className="border-t dark:border-gray-700 pt-4 mt-4">
                  <div className="flex justify-between">
                    <p className="text-gray-600 dark:text-gray-300">{room.pricePerNight} € x {numberOfNights} nights</p>
                    <p className="font-semibold dark:text-white">€{totalPrice}</p>
                  </div>
                  <div className="flex justify-between mt-2 text-xl font-bold dark:text-white">
                    <p>Total Price:</p>
                    <p>€{totalPrice}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleBookNow}
                disabled={totalPrice <= 0}
                className="mt-6 w-full bg-amber-600 text-white font-bold text-lg py-3 rounded-lg shadow-lg hover:bg-amber-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
