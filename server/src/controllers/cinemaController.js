const Cinema = require("../models/cinemaModel");
const catchAsync = require("../middleware/catchAsync");
const AppError = require("../utils/appError");
const cinemaController = {
  addCinema: catchAsync(async (req, res, next) => {
    const newCinema = new Cinema(req.body);
    const cinema = await newCinema.save();
    res.status(201).json({
      status: "success",
      message: "Thêm cinema thành công",
      cinema,
    });
  }),

  updateCinema: catchAsync(async (req, res, next) => {
    const cinema = await Cinema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!cinema) {
      return next(new AppError("No cinema found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Cập nhật thành công",
      cinema,
    });
  }),

  getAllCinemas: catchAsync(async (req, res, next) => {
    const queryObj = { ...req.query };
    const query = Cinema.find(queryObj);
    const cinemas = await query;
    res.status(200).json({
      status: "success",
      results: cinemas.length,
      cinemas,
    });
  }),

  getCinema: catchAsync(async (req, res, next) => {
    let cinema =
      (await Cinema.findOne({ slug: req.params.id })) ||
      (await Cinema.findById(req.params.id));
    // user = await user.populate("reviews");
    if (!cinema) {
      return next(new AppError("No cinema found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      cinema,
    });
  }),

  deleteCinema: catchAsync(async (req, res, next) => {
    const doc = await Cinema.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No cinema found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Xóa thành công",
    });
  }),
};

module.exports = cinemaController;
