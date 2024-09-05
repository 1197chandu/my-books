import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBooksByGenre } from "../redux/bookSlice";
import BookCards from "../components/BookCards";
import { backArrow } from "../utils/constants";

const BooksPage = () => {
  const { genre } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { books, status } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooksByGenre(genre));
  }, [dispatch, genre]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="book-page">
      <h1>
        <img
          src={backArrow}
          alt="back icon"
          className="back-icon"
          onClick={handleClick}
        />
        {genre} Books
      </h1>
      <div className="book-list">
        {status === "loading" && <p>Loading...</p>}
        {status === "succeeded" &&
          books.map((book) => {
            return <BookCards key={book.id} book={book} />;
          })}
      </div>
    </div>
  );
};

export default BooksPage;
