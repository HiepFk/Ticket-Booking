const Revation = require("../models/revationModel");
const factory = require("./handlerFactory");

const revationController = {
  getListRevation: factory.getAll(Revation),

  getRevation: factory.getOne(Revation),

  createRevation: factory.createOne(Revation),

  updateRevation: factory.updateOne(Revation),

  deleteRevation: factory.deleteOne(Revation),
};

module.exports = revationController;
