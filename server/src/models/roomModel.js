const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name"],
    },
    cinema: {
      type: mongoose.Schema.ObjectId,
      ref: "Cinema",
      require: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

roomSchema.pre(/^find/, function (next) {
  this.populate({
    path: "cinema",
    select: "name city",
  });
  next();
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
