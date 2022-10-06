const cinemaController = require("../controllers/cinemaController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

// router.use(isAuthenticatedUser, isAdmin);

router
  .route("/")
  .get(cinemaController.getListCinema)
  .post(cinemaController.createCinema);

router
  .route("/:id")
  .get(cinemaController.getCinema)
  .patch(cinemaController.updateCinema)
  .delete(cinemaController.deleteCinema);

module.exports = router;
