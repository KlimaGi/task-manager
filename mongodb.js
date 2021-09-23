// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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

    // db.collection("users").insertOne(
    //   {
    //     name: "Gi",
    //     age: 31,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Vy",
    //       age: 36,
    //     },
    //     {
    //       name: "Va",
    //       age: 81,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents!");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    db.collection("tasks").insertMany(
      [
        {
          description: "Read the book",
          completed: true,
        },
        {
          description: "Learn node.js",
          completed: true,
        },
        {
          description: "clean the house",
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert documents!");
        }
        console.log(result.ops);
      }
    );
  }
);
