const Ticket = require("../models/ticketModel");
const factory = require("./handlerFactory");
const catchAsync = require("./../middleware/catchAsync");

const ticketController = {
  getListTicket: factory.getAll(Ticket),

  getTicket: factory.getOne(Ticket),

  createTicket: factory.createOne(Ticket),

  updateTicket: factory.updateOne(Ticket),

  deleteTicket: factory.deleteOne(Ticket),

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
