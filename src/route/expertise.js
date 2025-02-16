const express = require("express");
const Expertise = require("../models/expertiseSchema");

const router = express.Router();

router.get("", async function handleGetExpertise(req, res) {
  const expertise = await Expertise.find({});
  res.json(expertise);
});

module.exports = router;
