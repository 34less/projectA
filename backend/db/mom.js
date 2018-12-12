const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const MomSchema = new Schema(
  {
    id: Number,
    date: { type: Date, default: Date.now },
    title: String,
    description: String,
    project: 
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Mom", MomSchema);