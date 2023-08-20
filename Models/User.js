const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  imageUrl: { type: String },
  age: { type: Number, required: true },
});

const User = mongoose("User", UserModel);
module.exports = User;
