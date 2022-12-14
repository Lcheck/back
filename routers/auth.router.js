const express = require("express");
const authController = require("../controllers/auth.Controller");
const router = express.Router();

router.post("/auth/signup", authController.signup);
router.post("/auth/login");
module.exports = router;
