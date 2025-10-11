const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
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
    unique: true,
    trim: true,
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
  // Password Reset Fields
  passwordResetToken: String,
  passwordResetExpires: Date,

}, { timestamps: true });

module.exports = mongoose.model('Admin', AdminSchema);