const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name"],
    },
    slug: String,
    city: {
      type: String,
      required: [true, "Please tell us your name"],
    },
    address: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const Cinema = mongoose.model("Cinema", cinemaSchema);

module.exports = Cinema;
