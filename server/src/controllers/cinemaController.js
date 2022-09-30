const Cinema = require("../models/cinemaModel");
const factory = require("./handlerFactory");

const cinemaController = {
  getListCinema: factory.getAll(Cinema),

  getCinema: factory.getOne(Cinema),

  createCinema: factory.createOne(Cinema),

  updateCinema: factory.updateOne(Cinema),

  deleteCinema: factory.deleteOne(Cinema),
};

module.exports = cinemaController;
