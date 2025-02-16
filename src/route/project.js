const express = require("express");
const handleGetProject = require("../controller/handleAllProject");
const router = express.Router();

router.get("/", handleGetProject);

module.exports = router;
