const express = require("express");
const mongoose = require("mongoose");
const dreamRouter = require("./routes/dreamRoutes");

const mongoDB = "mongodb://localhost/dreams";

// express app
const app = express();

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

app.use("/dreams", dreamRouter);

app.listen(3000, () => {
  console.log("Server started");
});
