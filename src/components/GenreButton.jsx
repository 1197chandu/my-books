import React from "react";
import { nextArrow } from "../utils/constants";

const GenreButton = ({ genre, onClick }) => {
  const imageSrc = process.env.PUBLIC_URL + `/images/${genre}.svg`;

  return (
    <div className="genre-button" onClick={() => onClick(genre)}>
      <div className="genre-icon-group">
        <img src={imageSrc} alt={genre} className="genre-icon" />
        {genre}
      </div>
      <img src={nextArrow} alt="Next arrow icon" className="next-icon" />
    </div>
  );
};

export default GenreButton;
