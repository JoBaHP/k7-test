require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dreamRouter = require("./routes/dreamRoutes");

// in .env DATABASE_URL = mongodb://localhost/dreams

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("connected...");
});
db.on("error", (error) => {
  console.error(error);
});

app.use(express.json());

app.use("/dreams", dreamRouter);

app.listen(3000, () => {
  console.log("Server started");
});
