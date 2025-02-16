const Project = require("../models/projectSchema");

async function handleGetTechnologies(req, res) {
  const technologies = await Project.distinct("technologies");
  res.json(technologies);
}

module.exports = { handleGetTechnologies };
