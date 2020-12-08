import React, { useState, useEffect } from "react";
import axios from "axios";

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/books").then((res) => {
      console.log(res.data);
      setBooks(res.data);
    });
  }, []);

  return (
    <div>
      <h1>THE LIST!</h1>

      {books &&
        books.map((eachBook) => {
          return (
            <ul>
              <li>
                <img src={eachBook.image_url} alt="bookImg" />
              </li>
              <li>
                <b>Book title: {eachBook.title}</b>
              </li>
              <li>Description: {eachBook.description}</li>
              <li>Rating: {eachBook.rating}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default AllTheBooks;
