import React from "react";
import GenreButton from "../components/GenreButton";
import { useNavigate } from "react-router-dom";
import { genres } from "../utils/constants";
import "../css/GenrePage.css";

const GenrePage = () => {
  const navigate = useNavigate();

  const handleGenreClick = (genre) => {
    navigate(`/genre/${genre}`);
  };

  return (
    <div className="genre-page">
      <div className="intro">
        <h1>My Books</h1>
        <p>
          A social cataloging website that allows you to freely search its
          database of books, annotations, and reviews.
        </p>
      </div>
      <div className="genre-buttons">
        {genres.map((genre, index) => (
          <GenreButton
            key={genre + index}
            genre={genre}
            onClick={handleGenreClick}
          />
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
