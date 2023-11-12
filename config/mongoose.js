const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Connecting to the DB"));
db.once("open", () => {
  console.log("Successfully connected to the DB");
});

module.exports = db;
