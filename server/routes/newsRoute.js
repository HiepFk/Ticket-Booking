const newsController = require("../controllers/newsController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.route("/").get(newsController.getAllNewses).get(newsController.getNews);

router.use(isAuthenticatedUser, isAdmin);

router.route("/").post(newsController.addNews);

router
  .route("/:id")
  .patch(newsController.updateNews)
  .delete(newsController.deleteNews);

module.exports = router;
