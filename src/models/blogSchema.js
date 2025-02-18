const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    description: "The heading of the section",
  },
  content: {
    type: [String],
    description: "The content of the section",
  },
  subSections: [
    {
      heading: {
        type: String,
        description: "The heading of the subsection",
      },
      content: {
        type: [String],
        description: "The content of the subsection",
      },
      listItems: {
        type: [String],
        description: "The list items in the subsection",
      },
      codeExamples: {
        type: [String],
        description: "Code examples in the subsection",
      },
      explanation: {
        type: [String],
        description: "Explanations for code examples",
      },
    },
  ],
  listItems: {
    type: [String],
    description: "The list items in the section",
  },
  codeExamples: {
    type: [String],
    description: "Code examples in the section",
  },
  explanation: {
    type: [String],
    description: "Explanations for code examples",
  },
});

const blogDataSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    description: "The category of the blog post",
  },
  title: {
    type: String,
    required: true,
    description: "The title of the blog post",
  },
  subtitle: {
    type: String,
    required: true,
    description: "The subtitle of the blog post",
  },
  tags: {
    type: [String],
    description: "Tags associated with the blog post",
  },
  publishedDate: {
    type: Date,
    required: true,
    description: "The publication date of the blog post",
  },
  sections: [sectionSchema],
});

const BlogData = mongoose.model("blog", blogDataSchema);

module.exports = BlogData;
