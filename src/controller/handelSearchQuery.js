const Project = require("../models/projectSchema");

async function handleSearchProject(req, res, next) {
  try {
    const { q } = req.query;

    const query = q
      ? {
          $or: [
            { title: { $regex: q, $options: "i" } },
            { description: { $regex: q, $options: "i" } },
            { technologies: { $in: [q] } },
          ],
        }
      : {};
    const projects = await Project.find(query);
    console.log(query);
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
}

module.exports = { handleSearchProject };
