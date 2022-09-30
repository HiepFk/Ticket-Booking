const Food = require("../models/foodModel");
const factory = require("./handlerFactory");

const foodController = {
  getListFood: factory.getAll(Food),

  getFood: factory.getOne(Food),

  createFood: factory.createOne(Food),

  updateFood: factory.updateOne(Food),

  deleteFood: factory.deleteOne(Food),
};

module.exports = foodController;
