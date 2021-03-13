const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dreamSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["happy", "sad", "exciting", "scary"],
      required: true,
    },
    crated: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    dreamId: {
      type: Schema.Types.ObjectId,
      ref: "Dream",
      required: true,
    },
  },
  { timestamps: true }
);

const Dream = mongoose.model("Dreams", dreamSchema);
module.exports = Dream;
