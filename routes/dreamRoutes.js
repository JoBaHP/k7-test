const express = require("express");
const router = express.Router();
const Dream = require("../models/dream");

router.get("/", async (req, res) => {
  try {
    const dreams = await Dream.find();
    res.json(dreams);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dream = await Dream.findById(req.params.id);
    res.json(dream);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const dream = new Dream({
    title: req.body.title,
    description: req.body.description,
    type: req.body.type,
    crated: req.body.created,
  });

  try {
    const a1 = await dream.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const dream = await Dream.findById(req.params.id);
    dream.type = req.body.type;
    const a1 = await dream.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
