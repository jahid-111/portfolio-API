const express = require("express");
const {
  handleGetProject,
  handlePostProject,
  handleEditProject,
  handleDeleteProject,
} = require("../controller/handleAllProject");

const router = express.Router();

router.get("/", handleGetProject);
router.post("/", handlePostProject);
router.patch("/:id", handleEditProject);
router.delete("/:id", handleDeleteProject);

module.exports = router;
