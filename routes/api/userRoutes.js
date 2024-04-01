const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// GET all users at /api/users
router.route("/").get(getUsers);

// GET a single user by its _id at /api/users/:userId
router.route("/:userId").get(getSingleUser);

// POST request to create a new user at /api/users
router.route("/").post(createUser);

// PUT request to update a user by its _id at /api/users/:userId
router.route("/:userId").put(updateUser);

// DELETE request to remove a user by its _id at /api/users/:userId
router.route("/:userId").delete(deleteUser);

module.exports = router;
