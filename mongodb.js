// CRUD create read update delete
const chalk = require("chalk");
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("614c7ae452d66247389c3a29") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log("user ", user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 31 })
    //   .toArray((error, users) => {
    //     console.log("users: ", users);
    //   });

    // db.collection("users")
    //   .find({ age: 31 })
    //   .count((error, count) => {
    //     console.log("users count: ", count);
    //   });

    db.collection("tasks").findOne(
      {
        _id: new ObjectID("614c765c5981414cc84d074d"),
      },
      (error, task) => {
        if (error) {
          console.log("Unable ti fetch");
        }
        console.log(chalk.magenta("last task: "), task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          console.log("Unable to fetch");
        }
        console.log(chalk.magenta("task uncompleted: "), tasks);
      });
  }
);
