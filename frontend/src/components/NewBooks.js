import React, { useState } from "react";
import axios from "axios";

const NewBooks = () => {
  const [newBook, setNewBook] = useState({});

  function handleChange(e) {
    setNewBook({ [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/newbooks", newBook)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Hey~ Let's Add a New Book!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Book Title"
          onChange={handleChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          name="rating"
          type="text"
          placeholder="Rating"
          onChange={handleChange}
        />
        <input
          name="image"
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <button type="submit">Submit New Book!</button>
      </form>
    </div>
  );
};

export default NewBooks;
