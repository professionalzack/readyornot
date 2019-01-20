const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("TV show shower yeah");
});

module.exports = router;