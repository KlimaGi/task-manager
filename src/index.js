const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.use(express.json()); // parse data to obj
app.use(userRouter); // register
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
