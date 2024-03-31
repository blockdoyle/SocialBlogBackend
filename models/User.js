const mongoose = require("mongoose");

// Schema design for the User model
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trimmed: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// Create a new model for `User` with the `UserSchema`
const User = mongoose.model("User", UserSchema);

module.exports = User;
