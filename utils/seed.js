const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomUser, getRandomThought } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  // Delete all collections in the database
  let userCheck = await connection.db.listCollections({ name: "users" }).next();
  if (userCheck) {
    await connection.db.dropCollection("users");
  }

  try {
    // Create a new Users collection
    const users = [];
    for (let i = 0; i < 14; i++) {
      let user = getRandomUser();
      while (users.some((u) => u.username === user.username)) {
        user = getRandomUser();
      }
      users.push(user);
    }

    // Create a new Thoughts collection
    const thoughts = users.map((user) => {
      const thought = getRandomThought();
      return {
        thoughtText: thought,
        username: user.username,
        userId: user._id,
      };
    });

    await Thought.insertMany(thoughts);
    console.log("Thoughts seeded");

    await User.insertMany(users);
    console.log("Users seeded");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
