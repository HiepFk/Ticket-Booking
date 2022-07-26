const removeAccents = require("../utils/removeAccents");
const catchAsync = require("./../middleware/catchAsync");
const AppError = require("./../utils/appError");
const slugify = require("slugify");

const handlerFactory = {
  createOne: (Model) =>
    catchAsync(async (req, res, next) => {
      const data = await Model.create(req.body);
      res.status(200).json({
        status: "success",
        msg: "Create success",
        data,
      });
    }),
  getOne: (Model, popOptions) =>
    catchAsync(async (req, res, next) => {
      let query = Model.findOne({ slug: req.params.id });

      if (popOptions) query = query.populate(popOptions);

      const data = await query;

      if (!data) {
        return next(new AppError("No document found with that ID", 404));
      }

      res.status(200).json({
        status: "success",
        data,
      });
    }),
  getOneById: (Model, popOptions) =>
    catchAsync(async (req, res, next) => {
      let query = Model.findById(req.params.id);

      if (popOptions) query = query.populate(popOptions);

      const data = await query;

      if (!data) {
        return next(new AppError("No document found with that ID", 404));
      }

      res.status(200).json({
        status: "success",
        data,
      });
    }),
  getAll: (Model) =>
    catchAsync(async (req, res, next) => {
      let data = {};
      if (req.query) {
        const queryObj = { ...req.query };
        const query = Model.find(queryObj);
        data = await query;

        if (queryObj.city) {
          data = data.filter((item) => {
            return item?.room?.cinema?.city === queryObj.city;
          });
        }
        if (queryObj.name) {
          data = data.filter((item) => {
            return item?.movie?.slug === queryObj.name;
          });
        }
      } else {
        data = await Model.find();
      }

      res.status(200).json({
        status: "success",
        results: data.length,
        data,
      });
    }),
  deleteOne: (Model) =>
    catchAsync(async (req, res, next) => {
      const data = await Model.findByIdAndDelete(req.params.id);
      if (!data) {
        return next(new AppError("No document found with that ID", 404));
      }

      res.status(200).json({
        status: "success",
        msg: "Delete success",
        data: null,
      });
    }),
  deleteAll: (Model) =>
    catchAsync(async (req, res, next) => {
      const data = await Model.deleteMany({ user: req.params.id, paid: true });

      if (!data) {
        return next(new AppError("No document found with that ID", 404));
      }

      res.status(200).json({
        status: "success",
        data: null,
      });
    }),
  updateOne: (Model) =>
    catchAsync(async (req, res, next) => {
      // req.body.slug = removeAccents(req.body.name);
      // console.log(req.body.slug);

      const slug = removeAccents(req.body.name);
      req.body.slug = slugify(slug, { lower: true });

      const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!data) {
        return next(new AppError("No document found with that ID", 404));
      }

      res.status(200).json({
        status: "success",
        msg: "Update success",
        data,
      });
    }),
};
module.exports = handlerFactory;
