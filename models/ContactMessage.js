import mongoose from 'mongoose';

// 1. Define the schema (the structure) for your contact message
const ContactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
    trim: true, // Removes extra whitespace
  },
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
    trim: true,
    lowercase: true, // Stores the email in lowercase
  },
  message: {
    type: String,
    required: [true, 'Please provide a message.'],
  },
  // This field automatically adds the date and time
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 2. Export the model
// This line prevents Mongoose from redefining the model if this file is imported multiple times
export default mongoose.models.ContactMessage || 
  mongoose.model('ContactMessage', ContactMessageSchema);