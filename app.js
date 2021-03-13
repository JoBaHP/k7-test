const express = require("express");
const mongoose = require("mongoose");
const dreamRouter = require("./routes/dreamRoutes");

const mongoDB = "mongodb://127.0.0.1/drams";

// express app
const app = express();

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});
app.use("/dreams", dreamRouter);

app.listen(9000, () => {
  console.log("Server started");
});
