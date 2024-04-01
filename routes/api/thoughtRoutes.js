const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
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

module.exports = router;
