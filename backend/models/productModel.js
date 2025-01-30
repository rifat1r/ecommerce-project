const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter price"],
    maxlength: [8, "price exceed more than 8 figures"],
  },
  reting: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter category"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxlength: [4, "Stock can exceed 4 figures"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
