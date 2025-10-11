# Modern Agriculture - Fullstack Application

This repository contains a full-stack application for a modern agriculture platform. It features a Node.js/Express backend with a MongoDB database (using Mongoose) and a React frontend built with Vite and styled with Tailwind CSS.

The platform supports user and admin roles, JWT-based authentication, profile management with image uploads, product listings, and a subscription system integrated with Stripe.

## Table of contents
- [Project Layout](#project-layout)
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

## Backend: install & run

From the `Backend/` folder:

```powershell
cd Backend
npm install
npm run dev   # uses nodemon
# or
npm start     # production
```

The server serves uploaded images from `/uploads` (the server ensures that folder exists).

## Frontend: install & run

From the `Fronted/` folder:

```powershell
cd Fronted
npm install
npm run dev
```

The frontend expects an environment variable `VITE_API_URL` in your Vite environment (for example, set it to `http://localhost:3000` when running locally). You can create `.env` in `Fronted/` with the following:

```
VITE_API_URL=http://localhost:3000
```

## API endpoints (summary)

Authentication:
- `POST /api/auth/register` — register user (multipart/form-data, optional `profileImage`).
- `POST /api/auth/login` — login; returns `{ token, user }`.
- `GET /api/auth/user` — returns user info (requires `x-auth-token` header).

Products:
- `GET /api/products` — list products.
- `POST /api/products` — create product (multipart/form-data: fields `name`, `quantity`, `description`, file `image`).
- `DELETE /api/products/:id` — delete product and its image file.

Pricing & payments:
- `GET /api/pricing` — fetch pricing tiers (public).
- `PUT /api/pricing` — update pricing tiers (admin only; requires `x-auth-token`).
- `POST /api/pricing/checkout` — create a Stripe Checkout session; request body expects `{ priceId, tierId?, paymentMethods? }` and optionally an `x-auth-token` header (the server persists a `Payment` record linking the Stripe session to priceId/tierId/userId).

Notes on Checkout: the server creates a `Payment` document with `sessionId`, `priceId`, `tierId`, `userId` (if token provided) and status `created`. Implementing a Stripe webhook to update `Payment.status` on checkout completion is recommended.

## Data models (summary)

- `User` / `Admin` — authentication models (passwords stored hashed).
- `Product` — { name, quantity, description, imagePath }
- `Pricing` — single document with `tiers` array. Each tier includes `{ id, title, price, priceId, popular, features[] }`.
- `Payment` — { sessionId, priceId, tierId, userId, amount, currency, status }

## Admin & pricing flow

1. Admin uses `AdminPricing` in the frontend to set `priceId` for a tier (a Stripe Price ID). This is saved to the `Pricing` document.
2. The public `Pricing` page reads the `priceId` and, when a user clicks a tier, posts to `/api/pricing/checkout` with `{ priceId, tierId }` and redirects to the returned Stripe Checkout URL.
3. The backend stores a `Payment` document at session creation for reconciliation. Add a Stripe webhook to mark payments as completed.

## Next steps / recommended improvements

- Add a Stripe webhook endpoint (e.g. `/api/webhook/stripe`) and configure it to update `Payment.status` on `checkout.session.completed` and other events.
- Use the shared `adminMiddleware` from `auth.js` for all admin-only routes (instead of ad-hoc token checks) for consistency.
- Add basic E2E or integration tests for the pricing/checkout flow.
- Add README sections for development workflows (how to seed data, run migrations, run tests).

## Contribution

If you'd like me to expand this README with more developer-focused docs (seed scripts, test harness, or deployment steps), tell me which parts you prefer and I will add them.

---
Generated automatically from the project files on Oct 10, 2025.
