const cinemaController = require("../controllers/cinemaController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.use(isAuthenticatedUser, isAdmin);

router
  .route("/")
  .get(cinemaController.getAllCinemas)
  .post(cinemaController.addCinema);

router
  .route("/:id")
  .get(cinemaController.getCinema)
  .patch(cinemaController.updateCinema)
  .delete(cinemaController.deleteCinema);

module.exports = router;
