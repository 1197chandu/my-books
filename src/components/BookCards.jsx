import React from "react";

const BookCards = ({ book }) => {
  return (
    <div className="book-card">
      <img
        src={book.formats["image/jpeg"] || "default-cover.jpg"}
        alt={book.title}
        className="book-image"
      />
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">
        {book.authors?.map((author) => author.name).join(", ")}
      </p>
    </div>
  );
};

export default BookCards;
