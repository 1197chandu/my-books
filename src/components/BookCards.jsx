import React from "react";
import { Link } from "react-router-dom";

const BookCards = ({ book }) => {
  console.log(book);
  let bookUrl = "";

  if (book.formats["text/html"]) {
    bookUrl = book.formats["text/html"];
  } else if (book.formats["text/plain"]) {
    bookUrl = book.formats["text/plain"];
  }

  return (
    <div>
      <a href={bookUrl} target="_blank" rel="noreferrer" className="book-link">
        <div className="book-card">
          <img
            src={book.formats["image/jpeg"]}
            alt={book.title}
            className="book-image"
          />
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">
            {book.authors?.map((author) => author.name).join(", ")}
          </p>
        </div>
      </a>
    </div>
  );
};

export default BookCards;
