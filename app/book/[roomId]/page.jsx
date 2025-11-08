'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format, differenceInCalendarDays } from 'date-fns';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Loader } from '@/components/loader/Loader';


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

  // Inside your BookingPage component, near your other useState calls
  const router = useRouter(); // For redirection
  const [isBooking, setIsBooking] = useState(false); // For the button loading state


  const roomId = useRoomId();
  const { isSignedIn, isLoaded, user } = useUser();

  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [dateRange, setDateRange] = useState(undefined);
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  // Fetch room details
  useEffect(() => {
    if (roomId) {
      const fetchRoomDetails = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(`/api/rooms/${roomId}`);
          if (!response.ok)
            throw new Error('We could not find details for this room. It may be unavailable.');
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

  // Calculate nights and total price
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

  // --- THIS IS THE UPDATED FUNCTION ---
  const handleBookNow = async () => {
    if (!isSignedIn) {
      alert('Please sign in to complete your booking.');
      return;
    }

    // Check if dates are selected
    if (!dateRange?.from || !dateRange?.to) {
      alert('Please select your check-in and check-out dates.');
      return;
    }

    setIsBooking(true); // Show loading spinner

    // 1.the 3-second payment delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // --- [START] DEBUGGING BLOCK 1 ---
    const bookingData = {
      roomId: roomId,
      checkInDate: dateRange.from,
      checkOutDate: dateRange.to,
      guests: numberOfGuests,
      totalPrice: totalPrice,
    };
//     console.log('--- [FRONTEND LOG] Sending this data to API: ---', bookingData);
    // --- [END] DEBUGGING BLOCK 1 ---

    // 2. After delay, call API to create the booking
    try {
      const res = await fetch('/api/bookings/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData), // Use the variable here
      });

      if (res.ok) {
        // 3. Show success and redirect
//         alert('Payment Successful! Your room is booked.');
        router.push('/reservation'); // Redirect to the user's booking page
      } else {
        // --- [START] DEBUGGING BLOCK 2 ---
        // This will log the error details from the server (like 401 or 500)
//         console.error('--- [FRONTEND LOG] API Error Response: ---', res);
        // --- [END] DEBUGGING BLOCK 2 ---
//         alert('Booking failed. Please try again.');
        setIsBooking(false); // Allow user to try again
      }
    } catch (error) {
//       console.error('Booking submission error:', error);
//       alert('An error occurred. Please try again.');
      setIsBooking(false); // Allow user to try again
    }
  };

  if (isLoading || !isLoaded)  return <Loader/>
  //<div className="text-center py-20">Loading Room Details...</div>;

  
  
  
  if (error) return <div className="text-center py-20 text-red-500 font-semibold">{error}</div>;
  if (!room) return <div className="text-center py-20">Could not find room details. Please try again.</div>;

 

  return (
    <>
      {/* Calendar Styling Fix */}
      <style>{`
        .rdp { --rdp-accent-color: #d97706; }

        .rdp .rdp-table {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
          /* REMOVED: display: table; - This was causing the main issue */
        }
        .rdp .rdp-table thead { /* REMOVED: display: table-header-group; */ }
        .rdp .rdp-table tbody { /* REMOVED: display: table-row-group; */ }
        .rdp .rdp-table tr { /* REMOVED: display: table-row; */ }

        .rdp .rdp-table th,
        .rdp .rdp-table td {
          /* REMOVED: display: table-cell; */
          width: calc(100% / 7);
          padding: 0.6rem 0;
          text-align: center;
          vertical-align: middle;
        }

        .rdp .rdp-head_cell {
          font-size: 0.85rem;
          color: #cbd5e1;
          padding-bottom: 0.75rem;
          letter-spacing: 0.6px;
        }

        .rdp .rdp-month {
          min-height: 360px;
          display: flex;
          flex-direction: column;
        }

        .rdp .rdp-nav {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .rdp .rdp-nav button {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--rdp-accent-color);
          padding: 6px 8px;
          border-radius: 6px;
          cursor: pointer;
        }
        .rdp .rdp-nav button:hover {
          background: rgba(217,119,6,0.1);
        }

        .rdp .rdp-day {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 6px;
        }

        .rdp .rdp-day:hover {
          background-color: rgba(249,115,22,0.12);
          color: #fff;
        }

        .rdp .rdp-day_selected,
        .rdp .rdp-day_selected:focus-visible,
        .rdp .rdp-day_selected:hover {
          background-color: var(--rdp-accent-color);
          color: white;
          font-weight: 600;
        }

        .rdp .rdp-day_range_middle {
          background-color: rgba(249,115,22,0.08);
        }

        @media (max-width: 640px) {
          .rdp .rdp-day { width: 34px; height: 34px; }
          .rdp .rdp-month { min-height: 320px; }
        }
      `}</style>

      <div className="bg-[#131322] min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 bg-[#131322] p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-white">Book Your Stay</h1>
            <h2 className="mt-2 text-2xl font-bold text-amber-600">{room.name}</h2>

            <div className="mt-8 border-t dark:border-gray-700 pt-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Select Your Dates</h3>

              <div className="w-full flex justify-center">
                <div className="w-full max-w-4xl">
                  <DayPicker
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={1}
                    disabled={{ before: new Date() }}
                    className="rdp text-white"
                    classNames={{
                      months: 'grid grid-cols-1 lg:grid-cols-2 gap-8',
                      month: 'bg-gray-800 rounded-lg p-6 shadow-md w-full',
                      caption: 'text-center text-lg font-semibold text-white mb-2',
                      caption_label: 'capitalize',
                      nav: 'rdp-nav',
                      table: 'rdp-table',
                      head_row: 'text-gray-300',
                      head_cell: 'rdp-head_cell',
                      row: '',
                      cell: '',
                      day: 'rdp-day',
                      selected: 'rdp-day_selected',
                      range_start: 'rdp-day_selected',
                      range_end: 'rdp-day_selected',
                      range_middle: 'rdp-day_range_middle',
                      disabled: 'opacity-30 cursor-not-allowed',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 border-t dark:border-gray-700 pt-6">
              <label htmlFor="guests" className="block text-xl font-semibold text-gray-100">
                Number of Guests
              </label>
              <select
                id="guests"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
                className="mt-2 w-full max-w-xs p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 text-white focus:ring-amber-500 focus:border-amber-500 hover:cursor-pointer"
              >
                {Array.from({ length: room.maxGuests }, (_, i) => i + 1).map(num => (
                  <option className='bg-[#131322] hover:cursor-pointer' key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg sticky top-28">
              <h3 className="text-2xl font-bold text-white border-b dark:border-gray-700 pb-4">Booking Summary</h3>
              <div className="space-y-4 mt-4">
                <div className="flex justify-between">
                  <p className="text-gray-300">Check-in:</p>
                  <p className="font-semibold text-white">{dateRange?.from ? format(dateRange.from, 'dd MMM yyyy') : 'Select date'}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-300">Check-out:</p>
                  <p className="font-semibold text-white">{dateRange?.to ? format(dateRange.to, 'dd MMM yyyy') : 'Select date'}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-300">Guests:</p>
                  <p className="font-semibold text-white">{numberOfGuests}</p>
                </div>
                <div className="border-t dark:border-gray-700 pt-4 mt-4">
                  <div className="flex justify-between">
                    <p className=" text-gray-300">{room.pricePerNight} ₹ x {numberOfNights} nights</p>
                    <p className="font-semibold text-white">₹{totalPrice}</p>
                  </div>
                  <div className="flex justify-between mt-2 text-xl font-bold text-white">
                    <p>Total Price:</p>
                    <p>₹{totalPrice}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleBookNow}
                disabled={totalPrice <= 0 || isBooking}
                className="mt-6 w-full bg-amber-600 text-white font-bold text-lg py-3 rounded-lg shadow-lg hover:bg-amber-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 hover:cursor-pointer"
              >
               {isBooking ? 'Processing Payment':'Book now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
