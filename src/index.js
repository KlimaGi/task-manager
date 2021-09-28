const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down. Check back soon!");
// });

app.use(express.json()); // parse data to obj
app.use(userRouter); // register
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   //--find owner by task id
//   // const task = await Task.findById("6152e3535db6b81e987198f8");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);

//   //--find tasks by user id
//   const user = await User.findById("6152e1b55db6b81e987198f3");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
