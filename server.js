const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/taskmanagerapi")
  .then(() => {
    console.log("connection created sucessfully");
  })
  .catch((err) => {
    console.error(`failed to connect :${err}`);
  });

const taskroutes = require("./routes/taskRoutes");
app.use("/tasks", taskroutes);

app.listen(3000, () => {
  console.log("server is running");
});
