const Movie = require("../models/moviewModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const movieController = {
  addMovie: catchAsync(async (req, res, next) => {
    const newMovie = new Movie(req.body);
    const movie = await newMovie.save();
    res.status(201).json({
      status: "success",
      message: "Thêm movie thành công",
      movie,
    });
  }),

  updateMovie: catchAsync(async (req, res, next) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!movie) {
      return next(new AppError("No movie found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Cập nhật thành công",
      movie,
    });
  }),

  getAllMovies: catchAsync(async (req, res, next) => {
    const queryObj = { ...req.query };
    const query = Movie.find(queryObj);
    const movies = await query;
    res.status(200).json({
      status: "success",
      results: movies.length,
      movies,
    });
  }),

  getMovie: catchAsync(async (req, res, next) => {
    let movie =
      (await Movie.findOne({ name: req.params.id })) ||
      (await Movie.findById(req.params.id));
    // user = await user.populate("reviews");
    if (!movie) {
      return next(new AppError("No movie found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      movie,
    });
  }),

  deleteMovie: catchAsync(async (req, res, next) => {
    const doc = await Movie.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No movie found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Xóa thành công",
    });
  }),
};

module.exports = movieController;
