const express = require("express");
const router = express.Router();

router.get("/", function getData(req, res) {
  console.log("The data");
  res.json("Data received"); // Respond to the request
});

module.exports = router;
