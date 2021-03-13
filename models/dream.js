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
    type: { type: String, enum: [happy, sad, exciting, scary], required: true },
    crated: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Dream = mongoose.model("Dream", dreamSchema);
module.exports = Dream;
