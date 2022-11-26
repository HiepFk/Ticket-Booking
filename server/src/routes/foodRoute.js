const foodController = require("../controllers/foodController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.route("/").get(foodController.getListFood);
router.route("/:id").get(foodController.getFood);

router.use(isAuthenticatedUser, isAdmin);

router.route("/").post(foodController.createFood);

router
  .route("/:id")
  .patch(foodController.updateFood)
  .delete(foodController.deleteFood);

module.exports = router;
