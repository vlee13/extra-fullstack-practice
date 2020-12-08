const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  image_url: String,
  title: String,
  description: String,
  rating: String,
});

module.exports = mongoose.model("Books", bookSchema, "books");
