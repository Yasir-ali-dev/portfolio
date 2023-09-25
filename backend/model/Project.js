const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
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
  image: {
    type: String,
    required: [true, "image is required"],
  },
});
module.exports = mongoose.model("products", projectSchema);
