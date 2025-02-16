const express = require("express");
const Project = require("../models/projectSchema");

const router = express.Router();

router.get("", async function handleGetTechnologies(req, res) {
  const technologies = await Project.distinct("technologies");
  res.json(technologies);
});

module.exports = router;
