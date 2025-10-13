import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    // We don't need a separate bookingId, MongoDB provides a unique _id for every document.
    
    // Link to the Room that was booked.
    roomId: {
        type: String, // e.g., "deluxe_suite", "presidential_suite"
        required: true,
    },

    // Link to the User who made the booking.
    userId: {
        type: String, // This will be the user ID provided by Clerk.
        required: true,
    },
    
    checkInDate: {
        type: Date,
        required: true,
    },

    checkOutDate: {
        type: Date,
        required: true,
    },

    numberOfGuests: {
        type: Number,
        required: true,
    },

    totalPrice: {
        type: Number,
        required: true,
    },

    paymentId: {
        type: String,
        required: true,
    },

    bookingStatus: {
        type: String,
        enum: ['Confirmed', 'Completed', 'Cancelled'], // Only allows these values.
        default: 'Confirmed',
    },

}, { timestamps: true }); // `timestamps: true` automatically adds `createdAt` and `updatedAt` fields.

// Create and export the model
const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

export default Booking;