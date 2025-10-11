const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true, // To match the database index
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true
  },
  profileImagePath: {
    type: String
  },
  // Preferences and subscription info for users
  agricultureTypes: { type: [String], default: [] }, // e.g. ['organic','non-organic']
  farmingTypes: { type: [String], default: [] }, // e.g. ['grains','vegetables']
  subscription: {
    tierId: { type: String, default: null },
    status: { type: String, enum: ['active','cancelled','none'], default: 'none' },
    stripeSessionId: { type: String, default: null }
  },
  // Password Reset Fields
  passwordResetToken: String,
  passwordResetExpires: Date,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }

}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);