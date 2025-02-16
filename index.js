const express = require("express");

const projectData = require("./src/route/project");
const skillsData = require("./src/route/skills");
const expertiseData = require("./src/route/expertise");
const queryData = require("./src/route/querySearch");
const blogData = require("./src/route/blog");
const dbConnect = require("./services/mongoDb/dbConnection");
dbConnect();
const app = express();
app.use("/project", projectData);
app.use("/skills", skillsData);
app.use("/expertise", expertiseData);
app.use("/blog", blogData);
app.use("/search", queryData);

app.listen(3000, () => {
  console.log("Server is running on ➡︎❤️‍🔥http://localhost:3000/project");
});
