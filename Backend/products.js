const express = require('express');
const router = express.Router();
const Product = require('./Product.js');
const multer = require('multer');
const path = require('path');

// Setup multer for product image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

// @route   GET api/products
// @desc    Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

// @route   POST api/products
// @desc    Create a new product (supports image upload)
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, quantity, description } = req.body;
    const imagePath = req.file ? req.file.path : null;

    const newProduct = new Product({
      name,
      quantity: Number(quantity) || 0,
      description: description || '',
      imagePath
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(400).json({ message: 'Error creating product', error });
  }
});

// @route   DELETE api/products/:id
// @desc    Delete a product and its image file if present
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // remove image file if exists
    if (product.imagePath) {
      const fs = require('fs');
      const imgPath = path.resolve(product.imagePath);
      fs.unlink(imgPath, (err) => {
        if (err) {
          // log and continue
          console.warn('Failed to remove image file', imgPath, err.message);
        }
      });
    }

    await Product.deleteOne({ _id: req.params.id });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Error deleting product', error });
  }
});

module.exports = router;