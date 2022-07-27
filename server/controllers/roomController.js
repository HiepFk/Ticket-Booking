const Room = require("../models/roomModel");
const catchAsync = require("./../middleware/catchAsync");
const AppError = require("./../utils/appError");
const cinemaController = {
  addRoom: catchAsync(async (req, res, next) => {
    const newRoom = new Room(req.body);
    const room = await newRoom.save();
    res.status(201).json({
      status: "success",
      message: "Thêm room thành công",
      room,
    });
  }),

  updateRoom: catchAsync(async (req, res, next) => {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!room) {
      return next(new AppError("No room found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Cập nhật thành công",
      cinema,
    });
  }),

  getAllRooms: catchAsync(async (req, res, next) => {
    const queryObj = { ...req.query };
    const query = Room.find(queryObj);
    const rooms = await query;
    res.status(200).json({
      status: "success",
      results: rooms.length,
      rooms,
    });
  }),

  getRoom: catchAsync(async (req, res, next) => {
    let room =
      (await Room.findOne({ slug: req.params.id })) ||
      (await Room.findById(req.params.id));
    // user = await user.populate("reviews");
    if (!room) {
      return next(new AppError("No room found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      room,
    });
  }),

  deleteRoom: catchAsync(async (req, res, next) => {
    const doc = await Room.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No room found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Xóa thành công",
    });
  }),
};

module.exports = cinemaController;
