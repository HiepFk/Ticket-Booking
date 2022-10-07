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
    seatUnAvailable: {
      type: Array,
      default: [],
    },
    seatAvailable: {
      type: Array,
      default: [],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

// scheduleSchema.virtual("rooms", {
//   ref: "Room",
//   foreignField: "schedule",
//   localField: "_id",
// });

scheduleSchema.pre(/^find/, function (next) {
  this.populate({
    path: "room",
    select: "name",
  }).populate({
    path: "movie",
    select: "slug name poster",
  });
  next();
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
