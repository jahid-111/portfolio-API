const express = require("express");

const projectData = require("./src/route/project");
const skillsData = require("./src/route/skills");
const expertiseData = require("./src/route/expertise");
const queryData = require("./src/route/querySearch");
const blogData = require("./src/route/blog");

const errorHandler = require("./src/utils/errorHandle");
const dbConnect = require("./services/mongoDb/dbConnection");
dbConnect();

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/project", projectData);
app.use("/skills", skillsData);
app.use("/expertise", expertiseData);
app.use("/blog", blogData);
app.use("/search", queryData);

// Use the error handler middleware after all routes
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on ➡︎❤️‍🔥http://localhost:3000/project");
});
