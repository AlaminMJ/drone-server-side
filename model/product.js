const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  img: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, default: "active" },
});

module.exports = mongoose.model("Product", ProductSchema);
