const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  email: { type: String },
  name: { type: String },
  number: { type: String },
  address: { type: String },
  quantity: { type: Number, default: 1 },
  product: { type: Object },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Order", OrderSchema);
