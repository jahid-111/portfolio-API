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

async function handleGetBlogById(req, res, next) {
  try {
    const specificBlog = await BlogData.findById(req.params.id);
    if (!specificBlog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({ success: true, data: specificBlog });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Blog ID" });
    }
    next(error);
  }
}
module.exports = { handleGetAllBlog, handleGetBlogById };
