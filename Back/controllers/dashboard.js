const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.send("Bienvenido al dashboard");
});

module.exports = router;