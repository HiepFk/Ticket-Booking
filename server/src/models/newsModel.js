const mongoose = require("mongoose");
const slugify = require("slugify");
const removeAccents = require("../utils/removeAccents");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A movie must have a title"],
      unique: true,
      trim: true,
    },
    desc: String,
    img: String,
    slug: String,
  },

  {
    timestamps: true,
  }
);

newsSchema.index({ slug: 1 });

newsSchema.pre("save", function (next) {
  const name = removeAccents(this.title);
  this.slug = slugify(name, { lower: true });
  next();
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
