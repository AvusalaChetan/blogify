const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    coverImageUrl: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timeseries: true }
);

module.exports = model("blog", blogSchema);
