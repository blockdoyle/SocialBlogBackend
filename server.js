const express = require("express");
const db = require("./config/connection");

// import models

const PORT = process.env.PORT || 3001;
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
