const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  number: { type: String, required: true },
  address: { type: String, required: true },
  amount: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
  product: { type: Object, required: true },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Order", OrderSchema);
