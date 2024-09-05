import React from "react";

const GenreButton = ({ genre, onClick }) => {
  const imageSrc = process.env.PUBLIC_URL + `/images/${genre}.svg`;
  const nextArrow = process.env.PUBLIC_URL + `/Next.svg`;
  return (
    <div className="genre-button" onClick={() => onClick(genre)}>
      <img src={imageSrc} alt={genre} className="genre-icon" />
      {genre}
      <img src={nextArrow} alt="Next arrow icon" className="next-icon" />
    </div>
  );
};

export default GenreButton;
