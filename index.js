const express = require("express");
const app = express();
PORT = 3000;
const db = require("./config/mongoose");

require("dotenv").config();
const path = require("path");

const assetsPath = path.join(__dirname, "assets");
app.use("/assets", express.static(assetsPath));

// setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error starting the server: ", err);
  } else {
    console.log("Server started successfully in PORT: ", PORT);
  }
});
