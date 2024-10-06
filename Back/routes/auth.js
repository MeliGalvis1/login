const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.use("/auth", authController);

module.exports = router;