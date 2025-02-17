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

async function handlePostProject(req, res, next) {
  try {
    const { title, description, thumbnail, liveLink, technologies } = req.body;

    // Ensure `technologies` is always an array
    if (!Array.isArray(technologies)) {
      return res.status(400).json({ error: "Technologies must be an array." });
    }

    const addProject = await Project.create({
      title,
      description,
      thumbnail,
      liveLink,
      technologies,
    });

    res.status(201).json(addProject); // 201 Created
  } catch (err) {
    console.error(err);
    next(err);
  }
}

module.exports = { handleGetProject, handlePostProject };
