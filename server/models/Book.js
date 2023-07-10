const mongoose = require("mongoose");

// Define the Books schema

const bookSchema = new mongoose.Schema({
  name: { type: String },
  author: { type: String },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  publisher: {
    type: String,
  },
  rating: { type: Number },
  publishing_year: { type: Number },
  price: {
    type: Number,
  },
  bought: {
    type: Boolean,
    default: true,
  },
  sold: {
    type: Boolean,
    default: true,
  },
  image_link: {
    type: String,
  },
  genre: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Courses model
module.exports = mongoose.model("Book", bookSchema);
