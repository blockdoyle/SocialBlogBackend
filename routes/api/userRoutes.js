const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userController");

// Set up GET all and POST at /api/users
router.route("/").get(getUsers);

// Set up GET one at /api/users/:id
router.route("/:userId").get(getSingleUser);

// Create a user with a POST request at /api/users
router.route("/").post(createUser);

module.exports = router;
