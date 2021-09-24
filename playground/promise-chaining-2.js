require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("614df3822c3ae813f89ba2a1")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
