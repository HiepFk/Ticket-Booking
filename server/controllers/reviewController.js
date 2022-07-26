const Review = require("../models/reviewModel");
const catchAsync = require("./../middleware/catchAsync");
const AppError = require("./../utils/appError");
const reviewController = {
  addReview: catchAsync(async (req, res, next) => {
    const newReview = new Review(req.body);
    const review = await newReview.save();
    res.status(201).json({
      status: "success",
      message: "Đánh giá thành công",
      review,
    });
  }),

  getAllReviews: catchAsync(async (req, res, next) => {
    const queryObj = { ...req.query };
    const query = Review.find(queryObj);
    const reviews = await query;
    res.status(200).json({
      status: "success",
      results: reviews.length,
      reviews,
    });
  }),

  // Phần user
  userAddReview: catchAsync(async (req, res, next) => {
    const data = { ...req.body };
    data.user = req.user.id;
    const newReview = new Review(data);
    const review = await newReview.save();
    res.status(200).json({
      status: "success",
      message: "Thêm nhận xét thành công",
      review,
    });
  }),

  userDeleteReview: catchAsync(async (req, res, next) => {
    const doc = await Review.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No review found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Xóa thành công",
    });
  }),
};

module.exports = reviewController;
