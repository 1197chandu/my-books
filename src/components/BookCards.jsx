import React from "react";
import "../css/BookCards.css";

const BookCards = ({ book }) => {
  let bookUrl = "";
  let isFormatAvailable = true;

  if (book.formats["text/html"]) {
    bookUrl = book.formats["text/html"];
  } else if (book.formats["application/pdf"]) {
    bookUrl = book.formats["application/pdf"];
  } else if (book.formats["text/plain"]) {
    bookUrl = book.formats["text/plain"];
  } else {
    isFormatAvailable = false;
  }

  const handleClick = (e) => {
    if (!isFormatAvailable) {
      e.preventDefault();
      alert("No viewable version available");
    }
  };

  return (
    <div>
      <a
        href={bookUrl}
        target="_blank"
        rel="noreferrer"
        className="book-link"
        onClick={handleClick}
      >
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
