const Movie = require("../models/movieModel");
const factory = require("./handlerFactory");

const movieController = {
  getListMovie: factory.getAll(Movie),

  getMovie: factory.getOne(Movie),

  createMovie: factory.createOne(Movie),

  updateMovie: factory.updateOne(Movie),

  deleteMovie: factory.deleteOne(Movie),
};

module.exports = movieController;
