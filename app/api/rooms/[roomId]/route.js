import { NextResponse } from 'next/server';
import { connect as connectDB } from '@/lib/db';
import Room from '@/models/Room'; 

export async function GET(request, { params }) {
  const { roomId } = await params;

  if (!roomId) {
    return NextResponse.json({ error: 'Room ID is required' }, { status: 400 });
  }

  try {
    await connectDB();

    // Find the one room that matches the roomId
    const room = await Room.findOne({ roomId: roomId });

    if (!room) {
      return NextResponse.json({ error: 'Room not found' }, { status: 404 });
    }

    return NextResponse.json(room, { status: 200 });

  } catch (error) {
    console.error('Failed to fetch room:', error);
    return NextResponse.json({ error: 'Failed to fetch room data' }, { status: 500 });
  }
}
