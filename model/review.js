const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    name: { type: String },
    img: { type: String },
    email: { type: String },
    massage: { type: String },
    rating: { type: Number, defult: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", ReviewSchema);
