require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("614df3822c3ae813f89ba2a1")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("614dc9c3848e982a24ae654f")
  .then((count) => {
    console.log("completed: ", count);
  })
  .catch((error) => {
    console.log("error: ", error);
  });
