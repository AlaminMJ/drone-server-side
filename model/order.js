const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  number: { type: String, required: true },
  address: { type: String, required: true },
  amount: { type: number, required: true },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Product", OrderSchema);
