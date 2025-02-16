const express = require("express");
const BlogData = require("../models/blogSchema");

const router = express.Router();

router.get("", async function handleGetAllBlog(req, res) {
  const blogs = await BlogData.find({});
  res.json(blogs);
});

module.exports = router;
