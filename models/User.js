const mongoose = require("mongoose");

// Create a new schema for a `User` with the following fields:
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trimmed: true },
  email: { type: String, required: true, unique: true },
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

// Export the `User` model
User.create([
  { username: "testUser1", email: "testUser1@acme.com" },
  { username: "testUser2", email: "testUser2@acme.com" },
]);

module.exports = User;
