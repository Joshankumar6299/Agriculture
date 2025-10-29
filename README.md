# Modern Agriculture - Fullstack Application

This repository contains a full-stack application for a modern agriculture platform. It features a Node.js/Express backend with a MongoDB database (using Mongoose) and a React frontend built with Vite and styled with Tailwind CSS.

The platform supports user and admin roles, JWT-based authentication, profile management with image uploads, product listings, and a subscription system integrated with Stripe.

## Table of contents
- [Project Layout](#project-layout)
- [Architecture Overview](#architecture-overview)
- [Component Structure](#component-structure)
- [Requirements](#requirements)
- [Environment Variables](#environment-variables)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Data Models](#data-models)
- [Key Features](#key-features)
- [Next Steps / Recommended Improvements](#next-steps--recommended-improvements)

## Project layout

Top-level folders:

- `Backend/` — Express server, Mongoose models and API routes.
- `Fronted/` — React frontend (Vite + Tailwind).

Key files:

- `Backend/server.js` — bootstraps the Express server and registers routes.
- `Backend/auth.js` — Handles user/admin registration, login, profile updates, and password reset.
- `Backend/products.js` — product CRUD and image upload (multer).
- `Backend/pricingRoute.js` — public pricing, admin pricing save, and Stripe Checkout session creation.
- `Backend/User.js`, `Backend/Admin.js`, `Backend/Product.js`, `Backend/Pricing.js`, `Backend/Payment.js` — Mongoose models.
- `Fronted/src/routers/Routes.jsx` — SPA routes (public and admin protected routes).
- `Fronted/src/pages/Login.jsx` — User and Admin login page.
- `Fronted/src/pages/Profile.jsx` — User profile page for viewing and editing information.
- `Fronted/src/pages/AdminDashboard.jsx` — Main dashboard for administrators.

## Architecture Overview

The application follows a modern full-stack architecture with clear separation of concerns:

### Backend Architecture

```
Backend/
├── server.js         # Entry point, Express setup, route registration
├── auth.js          # Authentication routes and middleware
├── products.js      # Product management routes
├── pricingRoute.js  # Pricing and payment routes
├── models/         
│   ├── User.js      # User model with preferences
│   ├── Admin.js     # Admin user model
│   ├── Product.js   # Product schema
│   ├── Pricing.js   # Pricing tiers
│   └── Payment.js   # Payment/subscription tracking
└── uploads/         # Uploaded files (images)
```

- **Authentication**: JWT-based with role separation (User/Admin)
- **File Uploads**: Multer middleware for image handling
- **Database**: MongoDB with Mongoose ODM
- **Payment Integration**: Stripe for subscription/payment processing

### Frontend Architecture

```
Fronted/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/       # React Context providers
│   ├── pages/         # Route components
│   ├── routers/       # Route definitions
│   └── data/          # Static data and constants
```

- **State Management**: React Context (AuthContext for user state)
- **Routing**: React Router v6 with protected routes
- **Styling**: Tailwind CSS for utility-first styling
- **API Integration**: Fetch API with environment-based URLs

## Component Structure

### Key Components and Their Responsibilities

#### Layout Components
- `RootLayout.jsx`: Base layout with header/footer
- `AdminLayout.jsx`: Admin dashboard layout with sidebar
- `ProtectedRoute.jsx`: Route guard for authenticated/admin routes

#### Authentication Flow
- `AuthContext.jsx`: Manages auth state, token, and user info
- `Login.jsx`: Combined login for users/admins
- `Register.jsx`: User registration with image upload

#### User Dashboard
- `Profile.jsx`: User profile editor with:
  - Personal info management
  - Agriculture/farming preferences
  - Subscription status
  - Profile image upload

#### Admin Features
- `AdminDashboard.jsx`: Overview and stats
- `ProductList.jsx`: Product CRUD with image upload
- `AdminPricing.jsx`: Pricing tier management
- `UserList.jsx`: User management interface

### Design Decisions

1. **Authentication & Authorization**
   - JWT stored in localStorage with role-based access
   - Separate User/Admin collections for clear separation
   - Protected routes check role at component level

2. **State Management**
   - React Context preferred over Redux for simplicity
   - AuthContext provides user data and token management
   - Component-local state for form handling

3. **File Upload Strategy**
   - Multer for backend file handling
   - Images stored in local `uploads/` directory
   - URLs constructed using environment-based API URL

4. **API Integration**
   - REST API with consistent error handling
   - Multipart form data for file uploads
   - JWT passed via `x-auth-token` header

5. **UI/UX Decisions**
   - Responsive design using Tailwind CSS
   - Form validation on both client and server
   - Immediate feedback on user actions
   - Consistent error message display

6. **Data Flow**
   - Top-down props for component configuration
   - Context for global state (auth, theme)
   - Local state for component-specific data
   - Optimistic updates where appropriate

### Future Architecture Considerations

1. **Scalability**
   - Consider implementing Redis for session storage
   - Add API rate limiting
   - Implement proper image CDN for uploads

2. **Performance**
   - Add React Query for API cache management
   - Implement lazy loading for routes
   - Add service worker for offline support

3. **Security**
   - Add CSRF protection
   - Implement refresh tokens
   - Add rate limiting for auth endpoints

## Requirements

- Node.js 18+ (tested with Node 18+) and npm
- MongoDB (local or cloud)
- Stripe account for payment processing (optional)
- An email service provider (like Ethereal, SendGrid, etc.) for password resets.

## Environment variables

Create a `.env` file in the `Backend/` directory.

#### `Backend/.env`

```
MONGO_URI=mongodb://127.0.0.1:27017/agri
PORT=3000
JWT_SECRET=some_long_random_secret
STRIPE_SECRET=sk_test_xxx

# Email settings (example using Ethereal)
EMAIL_HOST=smtp.ethereal.email
EMAIL_PORT=587
EMAIL_USER=your-ethereal-username@ethereal.email
EMAIL_PASS=your-ethereal-password
```

## Backend Setup

From the `Backend/` folder:

```powershell
cd Backend
npm install
npm run dev   # uses nodemon
# or
npm start     # production
```

The server serves uploaded images from `/uploads` (the server ensures that folder exists).

## Frontend Setup

From the `Fronted/` folder:

```powershell
cd Fronted
npm install
npm run dev
```

The frontend expects an environment variable `VITE_API_URL` in your Vite environment. Create `.env` in `Fronted/`:

```
VITE_API_URL=http://localhost:3000
```

## API Endpoints

Authentication:
- `POST /api/auth/register` — register user (multipart/form-data, optional `profileImage`).
- `POST /api/auth/login` — login; returns `{ token, user }`.
- `GET /api/auth/user` — returns user info (requires `x-auth-token` header).
- `PUT /api/auth/user` — update user profile (multipart/form-data, requires `x-auth-token`).

Products:
- `GET /api/products` — list products.
- `POST /api/products` — create product (multipart/form-data: fields `name`, `quantity`, `description`, file `image`).
- `DELETE /api/products/:id` — delete product and its image file.

Pricing & payments:
- `GET /api/pricing` — fetch pricing tiers (public).
- `PUT /api/pricing` — update pricing tiers (admin only; requires `x-auth-token`).
- `POST /api/pricing/checkout` — create Stripe Checkout session.

## Data Models

- `User` — { fullName, email, password, mobile, gender, address, profileImagePath, agricultureTypes, farmingTypes, subscription }
- `Admin` — { fullName, email, password, mobile, gender, address, profileImagePath }
- `Product` — { name, quantity, description, imagePath }
- `Pricing` — single document with `tiers` array. Each tier includes `{ id, title, price, priceId, popular, features[] }`.
- `Payment` — { sessionId, priceId, tierId, userId, amount, currency, status }

## Next Steps / Recommended Improvements

1. **User Experience**
   - Add success/error toast notifications
   - Implement proper form validation with error messages
   - Add loading states and skeleton loaders

2. **Security**
   - Add rate limiting for auth endpoints
   - Implement refresh tokens
   - Add CSRF protection

3. **Features**
   - Add Stripe webhook endpoint for payment status updates
   - Implement email notifications
   - Add user activity history

4. **Development**
   - Add end-to-end tests
   - Set up CI/CD pipeline
   - Add seed data scripts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests (when added)
5. Submit a pull request

---
Last updated: October 29, 2025
