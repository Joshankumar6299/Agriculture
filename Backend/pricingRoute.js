const express = require('express');
const router = express.Router();
const Pricing = require('./Pricing');
const path = require('path');

const stripeSecret = process.env.STRIPE_SECRET;
const Payment = require('./Payment');

// GET pricing (public)
router.get('/', async (req, res) => {
  try {
    let pricing = await Pricing.findOne();
    if (!pricing) {
      pricing = new Pricing({ tiers: [
        { id: 'basic', title: 'Basic', price: '$9/mo', priceId: '', features: ['Inventory management', 'Sales dashboard', 'Email support'] },
        { id: 'pro', title: 'Pro', price: '$29/mo', priceId: '', features: ['Everything in Basic', 'Advanced analytics', 'CSV import/export', 'Priority support'] },
        { id: 'enterprise', title: 'Enterprise', price: 'Contact', priceId: '', features: ['Everything in Pro', 'Custom integrations', 'Dedicated account manager'] }
      ] });
      await pricing.save();
    }
    res.json(pricing.tiers);
  } catch (err) {
    console.error('Get pricing error', err);
    res.status(500).json({ message: 'Error fetching pricing' });
  }
});

// PUT pricing (admin only) - simple role check
const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const jwt = require('jsonwebtoken');
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_dev_secret');
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

router.put('/', authMiddleware, async (req, res) => {
  try {
    if (!req.user || req.user.role !== 'admin') return res.status(403).json({ message: 'Admins only' });
    const newTiers = req.body;
    let pricing = await Pricing.findOne();
    if (!pricing) {
      pricing = new Pricing({ tiers: newTiers });
    } else {
      pricing.tiers = newTiers;
    }
    await pricing.save();
    res.json(pricing.tiers);
  } catch (err) {
    console.error('Save pricing error', err);
    res.status(500).json({ message: 'Error saving pricing' });
  }
});

// POST checkout via Stripe
router.post('/checkout', async (req, res) => {
  try {
    if (!stripeSecret) return res.status(500).json({ message: 'Stripe not configured' });
    const stripe = require('stripe')(stripeSecret);
    const { priceId, successUrl, cancelUrl, paymentMethods } = req.body;
    if (!priceId) return res.status(400).json({ message: 'priceId required' });

    // allow client to pass paymentMethods (array) or default to card+upi
    const methods = Array.isArray(paymentMethods) && paymentMethods.length > 0 ? paymentMethods : ['card', 'upi'];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: methods,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: successUrl || `${req.get('origin')}/success`,
      cancel_url: cancelUrl || `${req.get('origin')}/cancel`,
    });
    // Persist a Payment record (status: created) to track this attempt
    try {
      const userToken = req.header('x-auth-token');
      let userId = null;
      if (userToken) {
        try {
          const jwt = require('jsonwebtoken');
          const decoded = jwt.verify(userToken, process.env.JWT_SECRET || 'fallback_dev_secret');
          userId = decoded.user?.id || null;
        } catch (e) {
          // ignore invalid token
        }
      }

      await Payment.create({
        sessionId: session.id,
        priceId,
        tierId: req.body.tierId || null,
        userId,
        status: 'created'
      });
    } catch (e) {
      console.warn('Failed to create Payment record', e.message);
    }

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error', err);
    res.status(500).json({ message: 'Error creating checkout session' });
  }
});

module.exports = router;
