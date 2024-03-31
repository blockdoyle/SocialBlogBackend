const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const thoughtRoutes = require("./thought-routes");

router.use("/users", userRoutes);

module.exports = router;
