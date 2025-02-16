const express = require("express");
const Project = require("../models/projectSchema");

const router = express.Router();

router.get("/", async function handleSearchProject(req, res) {
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
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
