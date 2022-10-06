const mongoose = require("mongoose");

const revationSchema = new mongoose.Schema(
  {
    cinema: {
      type: mongoose.Schema.ObjectId,
      ref: "Cinema",
      require: true,
    },
    schedules: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Schedule",
      },
    ],
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

const Revation = mongoose.model("Revation", revationSchema);

module.exports = Revation;
