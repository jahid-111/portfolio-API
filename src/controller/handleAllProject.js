const Project = require("../../services/mongoDb/schema/projectSchema");

async function handleGetProject(req, res) {
  try {
    const resp = await Project.find({});
    console.log("The data");
    res.json(resp); // Respond to the request
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

module.exports = handleGetProject;
