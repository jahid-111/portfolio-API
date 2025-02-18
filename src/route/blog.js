const express = require("express");

const {
  handleGetAllBlog,
  handleGetBlogById,
  handleAddBlogContent,
  handleDeleteBlogById,
  handleEditBlogById,
} = require("../controller/handleBlog");

const router = express.Router();

router.get("", handleGetAllBlog);
router.get("/:id", handleGetBlogById);
router.post("", handleAddBlogContent);
router.delete("/:id", handleDeleteBlogById);
router.patch("/:id", handleEditBlogById);

module.exports = router;
