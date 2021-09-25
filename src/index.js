const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // parse data to obj
app.use(userRouter); // register
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const bcrypt = require("bcryptjs");
const myFunction = async () => {
  const password = "red1234?";
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare("red1234?", hashedPassword);
  console.log(isMatch);
};

myFunction();
