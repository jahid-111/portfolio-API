const express = require("express");
const {
  handleGetProject,
  handlePostProject,
} = require("../controller/handleAllProject");

const router = express.Router();

router.get("/", handleGetProject);
router.post("/", handlePostProject);

module.exports = router;
