const router = require("express").Router();
const { getUsers, getSingleUser } = require("../../controllers/userController");

// Set up GET all and POST at /api/users
router.route("/").get(getUsers);

// Set up GET one at /api/users/:id
router.route("/:userId").get(getSingleUser);

module.exports = router;
