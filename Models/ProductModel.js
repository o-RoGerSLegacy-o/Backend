const mongoose = require("mongoose");

const ProductModel = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: MediaStreamAudioDestinationNode },
  imageUrl: { type: String },
  Stock: { type: Number, required: true },
  rating: { type: Number },
});

const Product = mongoose.model("Product", ProductModel);

module.exports = Product;
