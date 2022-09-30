const mongoose = require("mongoose");
const slugify = require("slugify");
const removeAccents = require("../utils/removeAccents");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A movie must have a name"],
      unique: true,
      trim: true,
    },
    slug: String,
    time: String,
    release_date: {
      type: Date,
      default: new Date(),
    },
    description: {
      type: String,
      trim: true,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis pariatur harum iste enim ab placeat minima, corporis mollitia consequatur ex vel dolores? Voluptate culpa consectetur, dignissimos quisquam perferendis sunt.",
    },
    classify: {
      type: String,
      enum: ["G", "PG", "PG-13", "R", "NC-17"],
      required: [true, "A movie must have a classify"],
    },
    genre: {
      type: [String],
      // enum: ["Horror", "Romance", "Action", "Comedy", "Animation", "SCI-FI"],
      required: [true, "A movie must have a genre"],
    },

    background: String,
    poster: String,
    video: {
      type: String,
      default: "EHWxGt-LckA",
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 6.99,
    },
    priceDiscount: {
      type: Number,
      default: 0,
    },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

movieSchema.index({ price: 1, ratingsAverage: -1 });
movieSchema.index({ slug: 1 });

// movieSchema.virtual("reviews", {
//   ref: "Review",
//   foreignField: "product",
//   localField: "_id",
// });

movieSchema.pre("save", function (next) {
  const name = removeAccents(this.name);
  this.slug = slugify(name, { lower: true });
  next();
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
