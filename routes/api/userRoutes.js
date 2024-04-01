const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userController");

// GET all users at /api/users
router.route("/").get(getUsers);

// GET a single user by its _id at /api/users/:userId
router.route("/:userId").get(getSingleUser);

// POST request to create a new user at /api/users
router.route("/").post(createUser);

module.exports = router;
