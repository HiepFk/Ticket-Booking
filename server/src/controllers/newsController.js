const News = require("../models/newsModel");
const factory = require("./handlerFactory");

const newsController = {
  getListNews: factory.getAll(News),

  getNews: factory.getOne(News),

  createNews: factory.createOne(News),

  updateNews: factory.updateOne(News),

  deleteNews: factory.deleteOne(News),
};

module.exports = newsController;
