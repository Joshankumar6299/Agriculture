const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  imagePath: {
    type: String,
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);