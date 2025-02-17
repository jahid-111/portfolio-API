const Project = require("../models/projectSchema");

async function handleGetTechnologies(req, res, next) {
  try {
    const technologies = await Project.distinct("technologies");
    res.json(technologies); // Respond to the request
  } catch (err) {
    console.error(err);
    next(err);
  }
}

module.exports = { handleGetTechnologies };
