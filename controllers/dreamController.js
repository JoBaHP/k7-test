const Dream = require("../models/dream");

const dream_index = (req, res) => {
  Dream.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { dreams: result, title: "All dreams" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const dream_details = (req, res) => {
  const id = req.params.id;
  Dream.findById(id)
    .then((result) => {
      res.render("details", { dream: result, title: "Dream Details" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const dream_create_get = (req, res) => {
  res.render("create", { title: "Create a new dream" });
};

const dream_create_post = (req, res) => {
  const dream = new Dream(req.body);
  dream
    .save()
    .then((result) => {
      res.redirect("/dreams");
    })
    .catch((err) => {
      console.log(err);
    });
};

const dream_delete = (req, res) => {
  const id = req.params.id;
  Dream.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/dreams" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  dream_index,
  dream_details,
  dream_create_get,
  dream_create_post,
  dream_delete,
};
