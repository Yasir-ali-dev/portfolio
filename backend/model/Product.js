const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minLength: [5, "Please provide minimum 5 letter word"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [10, "Please provide minimum 10 letter word desc"],
    maxLength: [50, "Please provide maximum 50 word of description"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  rating: {
    type: Number,
    default: 4,
  },
  stock: {
    type: Number,
    required: [true, "stock is required"],
  },
  brand: {
    type: String,
    enum: ["Apple", "Samsung", "Huawei", "Redmi", "Oppo"],
  },
  category: {
    type: String,
    enum: [
      "smartphones",
      "laptops",
      "fragrances",
      "skincare",
      "groceries",
      "home-decoration",
      "furniture",
      "sunglasses",
      "automotive",
      "motorcycle",
      "lighting",
    ],
  },
  image: {
    type: String,
    required: [true, "image is required"],
  },
});
module.exports = mongoose.model("products", productSchema);
