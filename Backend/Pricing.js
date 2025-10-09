const mongoose = require('mongoose');

const tierSchema = new mongoose.Schema({
  id: String,
  title: String,
  price: String,
  // Stripe Price ID (set by admin) and a flag if this tier is highlighted/popular
  priceId: { type: String, default: '' },
  popular: { type: Boolean, default: false },
  features: [String]
});

const pricingSchema = new mongoose.Schema({
  tiers: [tierSchema]
}, { timestamps: true });

module.exports = mongoose.model('Pricing', pricingSchema);
