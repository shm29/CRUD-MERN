const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const employee = require("./routes/route");

const app = express();
app.use(bodyParser.json());

// route
app.use("/route", route);

mongoose.connect(
  "mongodb://localhost:27017/db",
  {
    useNewUrlParser: true,
    useFindAndModify: false
  },
  error => {
    if (error) {
      console.log("Unable to connect to db");
      process.exit(1);
    } else {
      console.log("Successfully connected to db");
    }
  }
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("App is running");
});
