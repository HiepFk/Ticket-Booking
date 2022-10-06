const scheduleController = require("../controllers/scheduleController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

// router.use(isAuthenticatedUser, isAdmin);

router
  .route("/")
  .get(scheduleController.getListSchedule)
  .post(scheduleController.createSchedule);

router
  .route("/:id")
  .get(scheduleController.getSchedule)
  .patch(scheduleController.updateSchedule)
  .delete(scheduleController.deleteSchedule);

module.exports = router;
