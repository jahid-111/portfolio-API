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

async function handleAddBlogContent(req, res, next) {
  try {
    const { category, title, subtitle, tags, publishedDate, sections } =
      req.body;

    const post = await BlogData.create({
      category,
      title,
      subtitle,
      tags,
      publishedDate,
      sections,
    });

    res.status(201).json({ success: "post", data: post });
  } catch (error) {
    next(error);
  }
}

async function handleDeleteBlogById(req, res, next) {
  try {
    const deleteBlog = await BlogData.findByIdAndDelete(req.params.id);
    if (!deleteBlog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({ success: true, message: "Blog deleted" });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Blog ID" });
    }
    next(error);
  }
}

async function handleEditBlogById(req, res, next) {
  try {
    const { category, title, subtitle, tags, publishedDate, sections } =
      req.body;

    const patchBlogData = await BlogData.findByIdAndUpdate(
      req.params.id,
      {
        category,
        title,
        subtitle,
        tags,
        publishedDate,
        sections,
      },
      { new: true }
    );
    res.status(200).json({ success: true, data: patchBlogData });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  handleGetAllBlog,
  handleGetBlogById,
  handleAddBlogContent,
  handleDeleteBlogById,
  handleEditBlogById,
};
