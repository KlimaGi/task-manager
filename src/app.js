const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use(express.json()); // parse data to obj
app.use(userRouter); // register
app.use(taskRouter);

module.exports = app;
