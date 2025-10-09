const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  priceId: { type: String, required: true },
  tierId: { type: String },
  userId: { type: String, default: null },
  amount: { type: Number, default: 0 },
  currency: { type: String, default: 'usd' },
  status: { type: String, default: 'created' },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
