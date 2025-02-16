const express = require("express");

const { handleSearchProject } = require("../controller/handelSearchQuery");

const router = express.Router();

router.get("/", handleSearchProject);

module.exports = router;
