// const { ObjectId } = require("mongodb");
const { User } = require("../models");

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();

      const userObj = {
        users,
      };

      res.json(userObj);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Get a single user by its _id and populated thought and friend data
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user found with this id!" });
      }

      // Create an object to store the user, its thoughts, and its friends
      const userObj = {
        user,
        thoughts: [],
        friends: [],
      };

      res.json(userObj);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    console.log(req.body);
    try {
      const user = await User.create(req.body);

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
