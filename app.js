const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/dreamRoutes");

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI =
  "mongodb+srv://JoBaHP:3weTuY5pzGgALEU@cluster0.7fnue.mongodb.net/dreams?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
