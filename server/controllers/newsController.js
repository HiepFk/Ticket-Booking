const News = require("../models/newsModel");
const catchAsync = require("./../middleware/catchAsync");
const AppError = require("./../utils/appError");
const newsController = {
  addNews: catchAsync(async (req, res, next) => {
    const newNews = new News(req.body);
    const news = await newNews.save();
    res.status(201).json({
      status: "success",
      message: "Thêm news thành công",
      news,
    });
  }),

  updateNews: catchAsync(async (req, res, next) => {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!news) {
      return next(new AppError("No news found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Cập nhật thành công",
      news,
    });
  }),

  getAllNewses: catchAsync(async (req, res, next) => {
    const queryObj = { ...req.query };
    const query = News.find(queryObj);
    const newes = await query;
    res.status(200).json({
      status: "success",
      results: newes.length,
      newes,
    });
  }),

  getNews: catchAsync(async (req, res, next) => {
    let news =
      (await News.findOne({ slug: req.params.id })) ||
      (await News.findById(req.params.id));
    if (!news) {
      return next(new AppError("No news found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      news,
    });
  }),

  deleteNews: catchAsync(async (req, res, next) => {
    const doc = await News.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No news found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Xóa thành công",
    });
  }),
};

module.exports = newsController;
