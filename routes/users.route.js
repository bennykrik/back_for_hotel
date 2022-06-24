const { Router } = require("express");
const userController = require("../controllers/users.controllers");
const authMiddleware = require("../middlewares/auth.middleware");
const { body } = require("express-validator");
const router = Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/", authMiddleware, userController.getUsers);

module.exports = router;