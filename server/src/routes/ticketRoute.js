const ticketController = require("../controllers/ticketcontroller");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.use(isAuthenticatedUser);

//  Người dùng
router.route("/user").post(ticketController.userBuyTicket);
router.route("/user/my").get(ticketController.userGetMyTicket);

router.use(isAdmin);

router.route("/").get(ticketController.getListTicket);
router.route("/id").get(ticketController.getTicket);

module.exports = router;
