const { Thought, User } = require("../models");

module.exports = {
  // GET all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();

      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // GET a single thought by its _id
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // POST to create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      // Push created thought _id to associated user's thoughts array field
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // PUT request to update a thought by its _id
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { thoughtText: req.body.thoughtText },
        { new: true }
      );

      if (!updatedThought) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }

      res.json(updatedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // DELETE to remove a thought by its _id
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!deletedThought) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }

      res.json(deletedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // POST to create a reaction stored in a single thought's reactions array field
  async createReaction(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { new: true }
      );

      if (!updatedThought) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }

      res.json(updatedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // DELETE function to remove a reaction by the reaction's reactionId value
  async deleteReaction(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );

      if (!updatedThought) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }

      res.json(updatedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
