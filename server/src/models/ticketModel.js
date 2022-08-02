const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    schedule: {
      type: mongoose.Schema.ObjectId,
      ref: "Schedule",
      require: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: true,
    },
    seat: [String],
    quantity: Number,
    price: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
