const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./User.js');
const Admin = require('./Admin.js');
const multer = require('multer');
const path = require('path');

// Use the JWT secret from environment or a fallback for development
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_dev_secret';

// --- Multer Setup for file uploads ---
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

// --- Middleware to verify JWT ---
const authMiddleware = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// --- Middleware to verify JWT and Admin Role ---
const adminMiddleware = async (req, res, next) => {
  try {
    // Check if the user is in the Admin collection first, then the User collection
    let user = await Admin.findById(req.user.id);
    if (!user) {
      user = await User.findById(req.user.id);
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next();
  } catch (err) {
    res.status(500).send('Server error during admin check');
  }
};


// --- REGISTER ROUTE ---
// @route   POST api/auth/register
// @desc    Register a new user
router.post('/register', upload.single('profileImage'), async (req, res) => {
  const { fullName, email, password, mobile, gender, address } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create new user
    user = new User({
      username: email, // Set username to email to satisfy unique index
      fullName,
      email,
      password,
      mobile,
      gender,
      address,
      // Save the path to the profile image if it exists
      profileImagePath: req.file ? req.file.path.replace(/\\/g, '/') : null
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// --- LOGIN ROUTE ---
// @route   POST api/auth/login
// @desc    Authenticate user and get token
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check for an admin first, then a regular user
    let user = await Admin.findOne({ email });
    let userRole = 'admin';

    if (!user) {
      user = await User.findOne({ email });
      userRole = 'user';
    }

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password with the found user (admin or regular)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
        role: userRole
      }
    };

    // Sign JWT token
    jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (error, token) => {
      if (error) {
        return res.status(500).send('Server error during token generation');
      }

      // Prepare user object for response (excluding password)
      const userResponse = user.toObject();
      delete userResponse.password;
      userResponse.role = userRole; // Ensure role is part of the response
      res.json({ token, user: userResponse });
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// --- GET USER ROUTE ---
// @route   GET api/auth/user
// @desc    Get user data for logged-in user
router.get('/user', authMiddleware, async (req, res) => {
  try {
    // req.user.id is from the authMiddleware
    // Try Admin first, then User so that admin tokens return admin data
    let user = await Admin.findById(req.user.id).select('-password');
    if (user) {
      const userObj = user.toObject();
      userObj.role = 'admin';
      return res.json(userObj);
    }

    user = await User.findById(req.user.id).select('-password');
    if (user) {
      const userObj = user.toObject();
      userObj.role = 'user';
      return res.json(userObj);
    }

    return res.status(404).json({ message: 'User not found' });
  } catch (error) {
    console.error('Get user error:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// --- GET ALL USERS (ADMIN ONLY) ---
// @route   GET api/auth/users
// @desc    Get all users
router.get('/users', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    console.error('Get users error:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// --- ADMIN REGISTER ROUTE ---
// @route   POST api/auth/admin/register
// @desc    Register a new admin user
router.post('/admin/register', upload.single('profileImage'), async (req, res) => {
  const { fullName, email, password, mobile, gender, address } = req.body;

  try {
    // Check if user already exists
    let admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create new user with admin role
    admin = new Admin({
      username: email,
      fullName,
      email,
      password,
      mobile,
      gender,
      address,
      profileImagePath: req.file ? req.file.path.replace(/\\/g, '/') : null,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(password, salt);

    await admin.save();
    res.status(201).json({ message: 'Admin user registered successfully' });
  } catch (error) {
    console.error('Admin registration error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// --- GET ALL ADMINS (ADMIN ONLY) ---
// @route   GET api/auth/admins
// @desc    Get all admins
router.get('/admins', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    // Fetch all documents from the Admin collection, excluding the password
    const admins = await Admin.find().select('-password');
    res.json(admins);
  } catch (error) {
    console.error('Get admins error:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// --- UPDATE USER/ADMIN PROFILE ---
// @route   PUT api/auth/user
// @desc    Update user or admin profile data
router.put('/user', [authMiddleware, upload.single('profileImage')], async (req, res) => {
  const { fullName, mobile, gender, address } = req.body;
  // The array fields are sent as JSON strings from FormData
  const agricultureTypes = req.body.agricultureTypes ? JSON.parse(req.body.agricultureTypes) : undefined;
  const farmingTypes = req.body.farmingTypes ? JSON.parse(req.body.farmingTypes) : undefined;

  try {
    // Find user by ID from token. Check Admin collection first, then User.
    let user = await Admin.findById(req.user.id);
    let userRole = 'admin';

    if (!user) {
      user = await User.findById(req.user.id);
      userRole = 'user';
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user fields
    user.fullName = fullName ?? user.fullName;
    user.mobile = mobile ?? user.mobile;
    user.gender = gender ?? user.gender;
    user.address = address ?? user.address;

    // For users, update preference fields
    if (userRole === 'user') {
      user.agricultureTypes = agricultureTypes ?? user.agricultureTypes;
      user.farmingTypes = farmingTypes ?? user.farmingTypes;
    }

    // Update profile image path if a new file was uploaded
    if (req.file) {
      user.profileImagePath = req.file.path.replace(/\\/g, '/');
    }

    await user.save();

    const userResponse = user.toObject();
    delete userResponse.password;
    userResponse.role = userRole;

    res.json(userResponse);
  } catch (error) {
    console.error('Update user error:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
