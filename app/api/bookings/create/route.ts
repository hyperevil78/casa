import { NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server'; 
import { connect } from '@/lib/db';
import Booking from '@/models/Booking'; 

export async function POST(request: Request) {
//   console.log('\n--- [BACKEND LOG] /api/bookings/create endpoint was HIT ---');

  try {
    // 1. Get User ID (This is working)
    const { userId } = getAuth(request as any);
    // console.log('[BACKEND LOG] Clerk User ID:', userId);

    if (!userId) {
    //   console.error('[BACKEND LOG] Auth FAILED: userId is null.');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Get the booking details from the request body
    const body = await request.json();
    // console.log('[BACKEND LOG] Received request body:', body);
    const { roomId, checkInDate, checkOutDate, guests, totalPrice } = body;

    // 3. Validate the data
    if (!roomId || !checkInDate || !checkOutDate || !guests || !totalPrice) {
    //   console.error('[BACKEND LOG] Validation FAILED: Missing required fields.');
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 4. Connect to the database
    // console.log('[BACKEND LOG] Connecting to database...');
    await connect();
    // console.log('[BACKEND LOG] Database connection successful.');

    // 5. Create the new booking document (NOW MATCHES YOUR SCHEMA)
    const newBooking = new Booking({
      userId: userId,
      roomId: roomId,
      checkInDate: new Date(checkInDate),
      checkOutDate: new Date(checkOutDate),
      numberOfGuests: guests, // Maps 'guests' from frontend to 'numberOfGuests'
      totalPrice: totalPrice,
      paymentId: `sim_${new Date().getTime()}`, // Adds the required simulated paymentId
      bookingStatus: 'Confirmed', // Matches your schema's 'bookingStatus' field
      // 'createdAt' is handled by timestamps: true, so we don't add it
    });

    // 6. Save the booking to the database
    // console.log('[BACKEND LOG] Saving booking to database...');
    await newBooking.save();
    // console.log('[BACKEND LOG] Booking saved successfully.');

    // 7. Send a success response
    return NextResponse.json({ success: true, booking: newBooking }, { status: 201 });

  } catch (error) {
    // console.error('--- [BACKEND LOG] CRITICAL ERROR in catch block: ---', error);
    return NextResponse.json({ error: 'An internal error occurred. Booking creation failed.' }, { status: 500 });
  }
}