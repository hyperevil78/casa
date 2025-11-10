// File: app/api/contact/route.js

import { NextResponse } from 'next/server';
import { connect } from '@/lib/db'; // Your database connection
import ContactMessage from '@/models/ContactMessage'; // Your Mongoose model

export async function POST(request) {
  try {
    // 1. Get the form data from the request
    const body = await request.json();
    const { name, email, message } = body;

    // 2. Validate the data
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 3. Connect to the database
    await connect();

    // 4. Create a new message document
    const newMessage = new ContactMessage({
      name,
      email,
      message,
    });

    // 5. Save the document to the database
    await newMessage.save();

    // 6. Send a success response
    return NextResponse.json(
      { success: true, message: "Message received!" },
      { status: 201 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'An internal error occurred.' },
      { status: 500 }
    );
  }
}