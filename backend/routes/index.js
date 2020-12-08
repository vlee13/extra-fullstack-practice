const express = require("express");
const router = express.Router();
const Books = require("../models/Book");

router.get("/books", (req, res) => {
  Books.find().then((books) => res.json(books));
});

router.post("/newbooks", (req, res) => {
  Books.create(req.body).then((newBook) => {
    res.json(newBook);
  });
});

module.exports = router;
