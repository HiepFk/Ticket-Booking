const Schedule = require("../models/scheduleModel");
const catchAsync = require("./../middleware/catchAsync");
const AppError = require("./../utils/appError");
const cinemaController = {
  addSchedule: catchAsync(async (req, res, next) => {
    const newSchedule = new Schedule(req.body);
    const schedule = await newSchedule.save();
    res.status(201).json({
      status: "success",
      message: "Thêm schedule thành công",
      schedule,
    });
  }),

  updateSchedule: catchAsync(async (req, res, next) => {
    const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!schedule) {
      return next(new AppError("No schedule found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Cập nhật thành công",
      schedule,
    });
  }),

  getAllSchedules: catchAsync(async (req, res, next) => {
    const queryObj = { ...req.query };
    const query = Schedule.find(queryObj);
    const schedules = await query;
    res.status(200).json({
      status: "success",
      results: schedules.length,
      cinemas,
    });
  }),

  getSchedule: catchAsync(async (req, res, next) => {
    let schedule =
      (await Schedule.findOne({ slug: req.params.id })) ||
      (await Schedule.findById(req.params.id));
    // user = await user.populate("reviews");
    if (!cinema) {
      return next(new AppError("No schedule found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      schedule,
    });
  }),

  deleteSchedule: catchAsync(async (req, res, next) => {
    const doc = await Schedule.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No schedule found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Xóa thành công",
    });
  }),
};

module.exports = cinemaController;
