const reviewController = require("../controllers/reviewController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.use(isAuthenticatedUser);

//  Người dùng
router.route("/user").post(reviewController.userAddReview);
router.route("/user/:id").delete(reviewController.userDeleteReview);

router.use(isAdmin);

router
  .route("/")
  .post(reviewController.createReview)
  .get(reviewController.getListReview);

router
  .route("/:id")
  .get(reviewController.getReview)
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;
