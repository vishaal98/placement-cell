const express = require("express");
const app = express();
PORT = 3000;
const db = require("./config/mongoose");

require("dotenv").config();
const path = require("path");

const session = require("express-session");
const MongoStore = require("connect-mongo"); // pass session as an argument here

// Using Passport js
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");

const assetsPath = path.join(__dirname, "assets");
app.use("/assets", express.static(assetsPath));

//make the uploads path available to the browser
app.use("/uploads", express.static(__dirname + "/uploads"));

// For Post Requests
app.use(express.urlencoded());

// setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Linking assets

app.use(
  session({
    name: "Placement Cell",
    // Change the secret before deployment
    secret: "blahblahblah",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB,
      autoRemove: "disabled",
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

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
