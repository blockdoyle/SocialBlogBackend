const { connect, connection } = require("mongoose");

const connectionString = "mongodb://localhost:27017/socialBlogDB";

connect(connectionString);

module.exports = connection;
