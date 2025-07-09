const { Schema, model } = require("mongoose");

const commentsSchema = Schema({
  content: {
    type: String,
    require:true
  },
  blogId:{
      type: Schema.Types.ObjectId,
      ref: "blog",
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
},
{timestamps:true}
);

module.exports = model("comments", commentsSchema);
