require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("614dc2e1ca119a0edc6346f7", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
