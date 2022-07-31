const mongoose = require("mongoose");
const slugify = require("slugify");
const removeAccents = require("../utils/removeAccents");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A food must have a name"],
      unique: true,
      trim: true,
    },
    slug: String,
    img: String,
    price: {
      type: Number,
      default: 6.99,
    },
    priceDiscount: {
      type: Number,
      default: 5,
    },
  },

  {
    timestamps: true,
  }
);

foodSchema.index({ slug: 1 });

foodSchema.pre("save", function (next) {
  const name = removeAccents(this.name);
  this.slug = slugify(name, { lower: true });
  next();
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
