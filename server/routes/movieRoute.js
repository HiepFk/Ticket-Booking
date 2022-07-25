const movieController = require("../controllers/movieController");
// const authController = require("../controllers/authController");
const router = require("express").Router();

router.route("/").get(movieController.getAllMovies);
router.route("/:id").get(movieController.getMovie);

// router.use(authController.protect);
// router.use(authController.isAdmin);

router.route("/").post(movieController.addMovie);
router
  .route("/:id")
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

module.exports = router;
