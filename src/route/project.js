const express = require("express");
const {
  handleGetProject,
  handlePostProject,
  handleEditProject,
} = require("../controller/handleAllProject");

const router = express.Router();

router.get("/", handleGetProject);
router.post("/", handlePostProject);
router.patch("/:id", handleEditProject);

module.exports = router;
