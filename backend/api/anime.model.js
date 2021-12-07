const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const AnimeSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  year: String,
});

const Anime = mongoose.model("Anime", AnimeSchema);
