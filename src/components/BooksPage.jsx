import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBooksByGenre, searchBooks } from "../redux/bookSlice";
import BookCards from "../components/BookCards";
import { backArrow } from "../utils/constants";
import NoResults from "./NoResults";

const BooksPage = () => {
  const { genre } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { books, status } = useSelector((state) => state.books);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      dispatch(searchBooks({ genre, query }));
    } else {
      dispatch(getBooksByGenre(genre));
    }
  }, [dispatch, genre, query]);

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
      <input
        type="text"
        placeholder="Search for books..."
        className="search-bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {status === "loading" && <p>Loading...</p>}

      {/* If no books found, display No Results */}
      {status === "succeeded" && books.length === 0 && <NoResults />}

      {/* Display books if found */}
      <div className="book-list">
        {status === "succeeded" &&
          books.length > 0 &&
          books.map((book) => <BookCards key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default BooksPage;
