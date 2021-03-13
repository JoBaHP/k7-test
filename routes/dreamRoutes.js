const express = require("express");
const dreamController = require("../controllers/dreamController");

const router = express.Router();

router.get("/create", dreamController.dream_create_get);
router.get("/", dreamController.dream_index);
router.post("/", dreamController.dream_create_post);
router.get("/:id", dreamController.dream_details);
router.delete("/:id", dreamController.dream_delete);

module.exports = router;
