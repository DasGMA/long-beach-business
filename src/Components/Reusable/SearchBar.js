import React from "react";
import search from "../../Assets/search.png";
import '../../Styles/search-bar.scss';

export default function SearchBar() {
  return (
    <div className="search-bar">
      <div className="label-box">
        <p className="label">Search</p>
      </div>
      <input
        className="search-input"
        placeholder="restaurants, services, deals..."
      />
      <button className="search-button">
        <img src={search} alt="Search icon" className="search-icon" />
      </button>
    </div>
  );
}
