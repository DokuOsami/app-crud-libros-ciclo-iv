const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let libroSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    rollno: {
      type: Number,
    },
  },
  {
    collection: "libro",
  }
);

module.exports = mongoose.model("libro", libroSchema);