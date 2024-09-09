import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBooksByGenre, searchBooks } from "../redux/bookSlice";
import BookCards from "../components/BookCards";
import { BASE_URL, backArrow } from "../utils/constants";
import NoResults from "./NoResults";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import "../css/BooksPage.css";

const BooksPage = () => {
  const { genre } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { books, next, status } = useSelector((state) => state.books);
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  console.log(books);

  useEffect(() => {
    if (query) {
      dispatch(searchBooks({ genre, query }));
    } else {
      dispatch(getBooksByGenre({ genre, url: null }));
    }
  }, [genre, query]);

  // Function to fetch more books when scrolling
  const fetchMoreBooks = async () => {
    if (next) {
      const str = next;
      const queryString = str.split("?")[1] ? `?${str.split("?")[1]}` : "";
      const nextUrl = `${BASE_URL}${queryString}`;
      dispatch(getBooksByGenre({ genre, url: nextUrl }));
    } else {
      setHasMore(false);
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="book-page">
      <h1 className="genre">
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

      {status === "succeeded" && books?.length === 0 && <NoResults />}

      <InfiniteScroll
        dataLength={books.length}
        next={fetchMoreBooks}
        hasMore={hasMore}
        loader={status === "loading" ? <Loader /> : null}
        endMessage={<p>No more books to display</p>}
      >
        <div className="book-list">
          {books &&
            books.map((book, index) => (
              <BookCards key={book + index} book={book} />
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default BooksPage;
