const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userCity: {
      type: String,
      required: true,
    },
    userDistrict: {
      type: String,
      required: true,
    },
    userPincode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const users = mongoose.model("users", userSchema);

module.exports = users;
