const Schedule = require("../models/scheduleModel");
const factory = require("./handlerFactory");

const scheduleController = {
  getListSchedule: factory.getAll(Schedule),

  getSchedule: factory.getOneById(Schedule),

  createSchedule: factory.createOne(Schedule),

  updateSchedule: factory.updateOne(Schedule),

  deleteSchedule: factory.deleteOne(Schedule),
};

module.exports = scheduleController;
