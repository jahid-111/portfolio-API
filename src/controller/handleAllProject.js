const Project = require("../models/projectSchema");

require("dotenv").config();
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
  const author = req.body.author;
  try {
    if (
      !author ||
      author.name !== process.env.AUTHOR_NAME ||
      process.env.PASSWORD !== author.password
    ) {
      return res
        .status(401)
        .json({ message: "Invalid author credentials or not Authorized" });
    }
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

async function handleEditProject(req, res, next) {
  const author = req.body.author;
  try {
    if (
      !author ||
      author.name !== process.env.AUTHOR_NAME ||
      process.env.PASSWORD !== author.password
    ) {
      return res
        .status(401)
        .json({ message: "Invalid author credentials or not Authorized" });
    }
    const { title, description, thumbnail, liveLink, technologies } = req.body;

    // Ensure `technologies` is always an array
    if (!Array.isArray(technologies)) {
      return res.status(400).json({ error: "Technologies must be an array." });
    }

    const editProject = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, thumbnail, liveLink, technologies },
      { new: true } // Returns updated document
    );

    if (!editProject) {
      return res.status(404).json({ error: "Project not found." });
    }

    res.status(200).json(editProject); // 200 OK
  } catch (err) {
    console.error(err);
    next(err); // Pass error to global error handler
  }
}

async function handleDeleteProject(req, res, next) {
  const author = req.body.author;
  try {
    if (
      !author ||
      author.name !== process.env.AUTHOR_NAME ||
      process.env.PASSWORD !== author.password
    ) {
      return res
        .status(401)
        .json({ message: "Invalid author credentials or not Authorized" });
    }

    const deleteProject = await Project.findByIdAndDelete(req.params.id);

    if (!deleteProject) {
      return res.status(404).json({ error: "Project not found." });
    }

    res.status(204).end(); // 204 No Content
  } catch (err) {
    console.error(err);
    next(err); // Pass error to global error handler
  }
}

module.exports = {
  handleGetProject,
  handlePostProject,
  handleEditProject,
  handleDeleteProject,
};
