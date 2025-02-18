const express = require("express");
const cors = require("cors");
const projectData = require("./src/route/project");
const skillsData = require("./src/route/skills");
const expertiseData = require("./src/route/expertise");
const queryData = require("./src/route/querySearch");
const blogData = require("./src/route/blog");

const errorHandler = require("./src/utils/errorHandler");
const dbConnect = require("./services/mongoDb/dbConnection");
dbConnect();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/project", projectData);
app.use("/api/skills", skillsData);
app.use("/api/expertise", expertiseData);
app.use("/api/blog", blogData);
app.use("/api/search", queryData);

// Use the error handler middleware after all routes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running on ➡︎❤️‍🔥http://localhost:3000/api/project");
});
