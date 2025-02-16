const BlogData = require("../models/blogSchema");

async function handleGetAllBlog(req, res) {
  const blogs = await BlogData.find({});
  res.json(blogs);
}

module.exports = { handleGetAllBlog };
