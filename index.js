const express = require("express");

const projectData = require("./src/route/project");
const dbConnect = require("./services/mongoDb/dbConnection");
dbConnect();
const app = express();
app.use("/project", projectData);

app.listen(3000, () => {
  console.log("Server is running ➡︎❤️‍🔥http://localhost:3000/project");
});
