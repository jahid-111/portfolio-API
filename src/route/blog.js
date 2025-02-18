const express = require("express");

const {
  handleGetAllBlog,
  handleGetBlogById,
  handleAddBlogContent,
} = require("../controller/handleBlog");

const router = express.Router();

router.get("", handleGetAllBlog);
router.get("/:id", handleGetBlogById);
router.post("", handleAddBlogContent);

module.exports = router;
