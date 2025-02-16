const express = require("express");

const { handleGetAllBlog } = require("../controller/handleBlog");

const router = express.Router();

router.get("", handleGetAllBlog);

module.exports = router;
