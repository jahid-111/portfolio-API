const BlogData = require("../models/blogSchema");

async function handleGetAllBlog(req, res, next) {
  try {
    const blogs = await BlogData.find({});
    if (!blogs || blogs.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No blogs found" });
    }
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    next(error);
  }
}

module.exports = { handleGetAllBlog };
