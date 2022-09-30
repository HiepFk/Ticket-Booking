const newsController = require("../controllers/newsController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.route("/").get(newsController.getListNews).get(newsController.getNews);

router.use(isAuthenticatedUser, isAdmin);

router.route("/").post(newsController.createNews);

router
  .route("/:id")
  .patch(newsController.updateNews)
  .delete(newsController.deleteNews);

module.exports = router;
