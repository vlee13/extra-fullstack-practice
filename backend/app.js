const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", require("./routes/index.js"));

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
