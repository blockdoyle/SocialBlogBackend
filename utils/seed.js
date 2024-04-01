const connection = require("../config/connection");
const { User } = require("../models");
const { getRandomUser } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  // Delete all collections in the database
  let userCheck = await connection.db.listCollections({ name: "users" }).next();
  if (userCheck) {
    await connection.db.dropCollection("users");
  }

  try {
    const users = [];
    for (let i = 0; i < 14; i++) {
      const user = getRandomUser();
      users.push(user);
    }

    await User.insertMany(users);
    console.log("Users seeded");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
