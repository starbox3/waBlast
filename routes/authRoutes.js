const { Router } = require("express");
const authController = require("../controllers/authController");
const { checkLog, requireAuth } = require("../middleware/authMiddleware");
const router = Router();
// router.get("/signup", authController.signup_get);
// router.post("/signup", authController.signup_post);
router.get("/login", checkLog, authController.login_get);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout_get);
router.get("/client", requireAuth, authController.client_get);
// router.post("/send-message", authController.sendMessage_post);

module.exports = router;
