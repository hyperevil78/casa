'use client';

import {useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs'; 
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Loader } from '@/components/loader/Loader';

// --- Helper Component for a Single Booking Card ---
const BookingCard = ({ booking }) => {
  const checkInDate = new Date(booking.checkInDate).toLocaleString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
  const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                {/* Simple logic to display room name from roomId */}
                {booking.roomId.replace('_', ' ')} 
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Booking ID: {booking._id}</p>
            </div>
            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                booking.bookingStatus === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'
            }`}>
                {booking.bookingStatus}
            </span>
        </div>
        
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Check-in</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{checkInDate}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Check-out</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{checkOutDate}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Guests</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{booking.numberOfGuests}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Price</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">₹{booking.totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main Page Component ---
const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    // We only want to fetch data if the user is fully loaded and signed in.
    if (isLoaded && isSignedIn) {
      const fetchBookings = async () => {
        setIsLoading(true); // Start loading
        setError(null); // Reset previous errors

        try {
          // IMPORTANT: Use the correct API path you created
          const response = await fetch('/api/my-booking'); 
          
          // If the response is not OK, we want to see the error from the API
          if (!response.ok) {
            let errorData;
            try {
              // Try to parse the error message from the API's JSON response
              errorData = await response.json();
            } catch (e) {
              // If the response isn't JSON, use the status text
              errorData = { message: response.statusText };
            }
            // Log the detailed error to the browser console for debugging
            // console.error("API Error Response:", errorData);
            // Throw a more informative error message to display on the page
            throw new Error(`Error fetching data: ${errorData.error || 'Please try again later.'}`);
          }
          
          const data = await response.json();
          setBookings(data);
        } catch (err) {
          // Set the more specific error message to be displayed
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchBookings();
    } else if (isLoaded && !isSignedIn) {
        // Handle the case where the user is loaded but not signed in
        setIsLoading(false);
    }
  }, [isLoaded, isSignedIn]); // The effect runs whenever the user's auth state changes.

  // --- Render different states ---
  
  // Show a loading spinner while clerk is checking auth or we are fetching data
  if (!isLoaded || (isSignedIn && isLoading)) {
    return (
        // <div className="flex justify-center items-center min-h-screen">
        //     <p className="text-lg">Loading your bookings...</p>
        // </div>

        <Loader/>
    );
  }
  
  // If the user is not signed in after loading, prompt them to log in.
  if (isLoaded && !isSignedIn) {
    return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-bold">Authentication Required</h2>
            <p className="mt-2">Please sign in to view your bookings.</p>
        </div>
    );
  }
  
  // If there was an error fetching data
  if (error) {
    return <div className="text-center py-20 text-red-500 font-semibold">{error}</div>;
  }

  // --- Main Content: Display Bookings ---
  return (
    <div className="bg-gray-50 dark:bg-[#131322] min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">My Bookings</h1>
        
        {bookings.length > 0 ? (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <BookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        ) : (
          <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">No Bookings Found</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">You haven't made any bookings yet. Why not explore our rooms?</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;

