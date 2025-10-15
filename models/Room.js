import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  maxGuests: { type: Number, required: true },
  // You can add more fields here later if needed
});

const Room = mongoose.models.Room || mongoose.model('Room', roomSchema);

export default Room;


// ### Step 2: Build the Frontend Booking Page

// Now for the main event. This page will be dynamic, meaning the URL will change based on the room being booked (e.g., `/book/deluxe_suite`).

// 1.  First, you need to install a calendar library. In your terminal, run:
//     ```bash
//     npm install react-day-picker date-fns
    
