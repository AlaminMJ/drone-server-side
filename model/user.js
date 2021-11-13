const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  email: { type: String, },
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User',UserSchema);