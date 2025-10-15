import { NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server'; // CORRECTED: Switched to getAuth
import { connect as connectDB } from '@/lib/db';
import Booking from '@/models/Booking'; 

export async function GET(request) { // The 'request' object is crucial now
  // 1. Check if the user is authenticated using getAuth
  const { userId } = getAuth(request); // CORRECTED: Pass the request object to getAuth
  
  //console.log("the user id is api is fetching is:", userId);
  

  if (!userId) {
    // If no user is logged in, return an unauthorized error
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // 2. Connect to the database
    await connectDB();

    // 3. Find bookings that match the logged-in user's ID
    const myBookings = await Booking.find({ userId: userId });

    // 4. Return the found bookings as a JSON response
    return NextResponse.json(myBookings, { status: 200 });

  } catch (error) {
    console.error('Failed to fetch bookings:', error);
    // If an error occurs, return a server error response
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}