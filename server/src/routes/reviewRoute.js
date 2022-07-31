const reivewController = require("../controllers/reviewController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.use(isAuthenticatedUser);

//  Người dùng
router.route("/user").post(reivewController.userAddReview);
router.route("/user/:id").delete(reivewController.userDeleteReview);

router.use(isAdmin);

router.route("/").get(reivewController.getAllReviews);

module.exports = router;
