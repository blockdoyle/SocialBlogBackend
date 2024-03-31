const express = require("express");
const db = require("./config/connection");
// const routes = require("./routes");

// Create a new Express application
const PORT = process.env.PORT || 3001;
const app = express();

// Start the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
