const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    name: { type: String },
    img: { type: String },
    email: { type: String, required: true },
    massage: { type: String, required: false },
    rating: { type: Number, defult: 1 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", ReviewSchema);
