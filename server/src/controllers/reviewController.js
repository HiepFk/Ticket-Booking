const Review = require("../models/reviewModel");
const catchAsync = require("./../middleware/catchAsync");
const factory = require("./handlerFactory");
const reviewController = {
  getListReview: factory.getAll(Review),

  getReview: factory.getOne(Review),

  createReview: factory.createOne(Review),

  updateReview: factory.updateOne(Review),

  deleteReview: factory.deleteOne(Review),

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
