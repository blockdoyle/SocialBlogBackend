const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// GET all thoughts at /api/thoughts
router.route("/").get(getThoughts);

// GET a single thought by its _id at /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought);

// POST to create a new thought at /api/thoughts
router.route("/").post(createThought);

// PUT to update a thought by its _id at /api/thoughts/:thoughtId
router.route("/:thoughtId").put(updateThought);

// DELETE to remove a thought by its _id at /api/thoughts/:thoughtId
router.route("/:thoughtId").delete(deleteThought);

// POST request to create a reaction stored in a single user's reactions array field
router.route("/:thoughtId/reactions").post(createReaction);

// DELETE request to pull and remove a reaction by the reaction's reactionId value
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
