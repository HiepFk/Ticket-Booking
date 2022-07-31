const Food = require("../models/foodModel");
const catchAsync = require("./../middleware/catchAsync");
const AppError = require("./../utils/appError");
const foodController = {
  addFood: catchAsync(async (req, res, next) => {
    const newFood = new Food(req.body);
    const food = await newFood.save();
    res.status(201).json({
      status: "success",
      message: "Thêm food thành công",
      food,
    });
  }),

  updateFood: catchAsync(async (req, res, next) => {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!food) {
      return next(new AppError("No food found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Cập nhật thành công",
      food,
    });
  }),

  getAllFoods: catchAsync(async (req, res, next) => {
    const queryObj = { ...req.query };
    const query = Food.find(queryObj);
    const foods = await query;
    res.status(200).json({
      status: "success",
      results: foods.length,
      foods,
    });
  }),

  getFood: catchAsync(async (req, res, next) => {
    let food =
      (await Food.findOne({ slug: req.params.id })) ||
      (await Food.findById(req.params.id));
    if (!food) {
      return next(new AppError("No food found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      food,
    });
  }),

  deleteFood: catchAsync(async (req, res, next) => {
    const doc = await Food.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No room found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Xóa thành công",
    });
  }),
};

module.exports = foodController;
