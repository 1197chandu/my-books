import React from "react";
import { noResultIcon } from "../utils/constants";
import "../css/NoResults.css";

const NoResults = () => {
  return (
    <div className="no-results">
      <img src={noResultIcon} alt="No results" className="no-results-image" />
      <p className="no-results-text">No books found.</p>
    </div>
  );
};

export default NoResults;
