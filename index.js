const express = require("express");
const app = express();
PORT = 3000;
const db = require("./config/mongoose");

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error starting the server: ", err);
  } else {
    console.log("Server started successfully in PORT: ", PORT);
  }
});
