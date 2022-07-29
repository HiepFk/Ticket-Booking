const mongoose = require("mongoose");
const slugify = require("slugify");
const removeAccents = require("../utils/removeAccents");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A movie must have a name"],
      unique: true,
      trim: true,
    },
    desc: String,
    img: String,
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: true,
    },
  },

  {
    timestamps: true,
  }
);

newsSchema.index({ slug: 1 });

newsSchema.pre("save", function (next) {
  const name = removeAccents(this.name);
  this.slug = slugify(name, { lower: true });
  next();
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
