const express = require("express");
const cors = require("cors");
const projectData = require("./src/route/project");
const skillsData = require("./src/route/skills");
const expertiseData = require("./src/route/expertise");
const queryData = require("./src/route/querySearch");
const blogData = require("./src/route/blog");

const errorHandler = require("./src/utils/errorHandler");
const dbConnect = require("./services/mongoDb/dbConnection");

// Initialize database connection
dbConnect();

const app = express();

const PORT = process.env.PORT || 3000;

// CORS configuration for deployment
app.use(
  cors({
    origin: "*", // You might want to restrict this in production
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root route for health check
app.get("/", (req, res) => {
  res.json({ status: `Server is running ${PORT}` });
});

// API routes
app.use("/api/project", projectData);
app.use("/api/skills", skillsData);
app.use("/api/expertise", expertiseData);
app.use("/api/blog", blogData);
app.use("/api/search", queryData);

// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
