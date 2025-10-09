const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path');

// Import routes
const authRoutes = require('./auth.js');
const productRoutes = require('./products.js');
const pricingRoutes = require('./pricingRoute.js');

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // To parse JSON bodies

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve static files from the "uploads" directory
app.use('/uploads', express.static('uploads'));

// --- 1. Database Connection ---
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/agri';

if (mongoURI) {
  mongoose.connect(mongoURI)
    .then(() => {
      console.log(`MongoDB connected successfully to "${mongoose.connection.name}" database.`);
    })
    .catch(err => {
      console.error('MongoDB connection error:', err);
      console.log('Server will continue without database connection.');
    });
} else {
  console.log('MONGO_URI not found in environment variables. Server will continue without database connection.');
}

// --- 2. Basic Route ---
app.get('/', (req, res) => {
  res.json({ message: 'Modern Agriculture API Server is running!' });
});

// --- 3. API Routes ---
// Use the imported routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/pricing', pricingRoutes);

// --- 4. Start the server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});