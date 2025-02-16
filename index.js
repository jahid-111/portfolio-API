const express = require("express");

const projectData = require("./src/route/project");
const skillsData = require("./src/route/skills");
const dbConnect = require("./services/mongoDb/dbConnection");
dbConnect();
const app = express();
app.use("/project", projectData);
app.use("/skills", skillsData);

app.listen(3000, () => {
  console.log("Server is running on ➡︎❤️‍🔥http://localhost:3000/project");
});
