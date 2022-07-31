const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
  {
    movie: {
      type: mongoose.Schema.ObjectId,
      ref: "Movie",
      require: true,
    },
    room: {
      type: mongoose.Schema.ObjectId,
      ref: "Room",
      require: true,
    },
    day: String,
    time: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
