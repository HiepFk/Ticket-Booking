const movieController = require("../controllers/movieController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.route("/").get(movieController.getListMovie);
router.route("/:id").get(movieController.getMovie);

// router.use(isAuthenticatedUser, isAdmin);

router.route("/").post(movieController.createMovie);
router
  .route("/:id")
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

module.exports = router;
