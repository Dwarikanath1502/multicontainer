const mongoose = require("mongoose");

const DATABASE = "mongodb://mymongo:27017/testup";

mongoose
  .connect(DATABASE)
  .then(() => {
    console.log("DB CONNECTED!");
  })
  .catch(() => {
    console.log("Error in DB connection!");
  });
