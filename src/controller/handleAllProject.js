const Project = require("../models/projectSchema");

async function handleGetProject(req, res, next) {
  try {
    const resp = await Project.find({});
    res.json(resp); // Respond to the request
  } catch (err) {
    console.error(err);
    next(err);
  }
}

module.exports = handleGetProject;
