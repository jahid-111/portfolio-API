const express = require("express");

const {
  handleGetAllBlog,
  handleGetBlogById,
} = require("../controller/handleBlog");

const router = express.Router();

router.get("", handleGetAllBlog);
router.get("/:id", handleGetBlogById);

module.exports = router;
