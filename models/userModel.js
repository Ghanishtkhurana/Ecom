const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  email: {
    type: String,
    required: [true, "Please provide the email id "],
    unique: true,
    validate: [validator.isEmail, "Please enter the valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide the password"],
    minLength: [8, "password should be greater then 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
