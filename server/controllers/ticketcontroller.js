const Ticket = require("../models/ticketModel");
const AppError = require("./../utils/appError");

const catchAsync = require("./../middleware/catchAsync");
const ticketController = {
  getTicket: catchAsync(async (req, res, next) => {
    let ticket =
      (await Ticket.findOne({ name: req.params.id })) ||
      (await Ticket.findById(req.params.id));
    // user = await user.populate("reviews");
    if (!ticket) {
      return next(new AppError("No ticket found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      ticket,
    });
  }),

  getAllTickets: catchAsync(async (req, res, next) => {
    const queryObj = { ...req.query };
    const query = Ticket.find(queryObj);
    const tickets = await query;
    res.status(200).json({
      status: "success",
      results: tickets.length,
      tickets,
    });
  }),

  // Phần user
  userBuyTicket: catchAsync(async (req, res, next) => {
    const data = { ...req.body };
    data.user = req.user.id;
    const newTicket = new Ticket(data);
    const ticket = await newTicket.save();
    res.status(200).json({
      status: "success",
      message: "Mua thành công",
      ticket,
    });
  }),

  userGetMyTicket: catchAsync(async (req, res) => {
    const ticket = await Ticket.findOne({ user: req.user.id });
    res.status(200).json({
      status: "success",
      ticket,
    });
  }),
};

module.exports = ticketController;
