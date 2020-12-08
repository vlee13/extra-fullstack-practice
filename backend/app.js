const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(cors());
app.use("/api", require("./routes/index.js"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://localhost/practiceDB", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.log("Error connecting to mongo", err);
  });

app.listen(5000, () => {
  console.log("Running on 5000...");
});

app.get("/api", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
