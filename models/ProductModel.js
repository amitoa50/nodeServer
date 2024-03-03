const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    Name: String,
    Color: String,
    Price: Number,
  },
  { versionKey: false }
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;