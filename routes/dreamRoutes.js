const express = require("express");
const router = express.Router();
const Dream = require("../models/dream");

router.get("/", async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const dreams = await Dream.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.json(dreams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// getDream
router.get("/", async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const dreams = await Dream.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.json(dreams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// filter
router.get("/dreams", async (req, res) => {
  const match = {};

  if (req.query.title) {
    match.published = req.query.published === "true";
  }
  try {
    await req.user
      .populate({
        path: "dreams",
        match,
      })
      .execPopulate();
    res.send(req.user.posts);
  } catch (error) {
    res.status(500).send();
  }
});
//get 1
router.get("/:id", async (req, res) => {
  try {
    const dream = await Dream.findById(req.params.id);
    res.json(dream);
  } catch (err) {
    res.send("Error " + err);
  }
});

// create 1
router.post("/", async (req, res) => {
  const dream = new Dream({
    title: req.body.title,
    description: req.body.description,
    type: req.body.type,
    crated: req.body.created,
  });

  try {
    const a1 = await dream.save();
    res.status(201).json(a1);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// update
router.patch("/:id", async (req, res) => {
  try {
    const dream = await Dream.findById(req.params.id);
    dream.type = req.body.title;
    const a1 = await dream.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

//delete
router.delete("/:id", getDream, async (req, res) => {
  try {
    await res.dream.remove();
    res.json({ message: "Deleted Dream" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getDream(req, res, next) {
  let dream;
  try {
    dream = await Dream.findById(req.params.id);
    if (dream == null) {
      return res.status(404).json({ message: "Cannot find dream" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.dream = dream;
  next();
}

module.exports = router;
