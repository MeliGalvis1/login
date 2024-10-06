const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard");

router.use("/dashboard", dashboardController);

module.exports = router;