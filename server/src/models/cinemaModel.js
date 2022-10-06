const mongoose = require("mongoose");
const slugify = require("slugify");
const removeAccents = require("../utils/removeAccents");

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
    // room: [String],
    address: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

// cinemaSchema.virtual("rooms", {
//   ref: "Room",
//   foreignField: "cinema",
//   localField: "_id",
// });

cinemaSchema.pre("save", function (next) {
  const name = removeAccents(this.name);
  this.slug = slugify(name, { lower: true });
  next();
});

const Cinema = mongoose.model("Cinema", cinemaSchema);

module.exports = Cinema;
