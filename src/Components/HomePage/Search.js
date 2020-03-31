import React from "react";
import "../../Styles/search-page.scss";
import search from "../../Assets/search.png"


function Search() {
    return (
        <div className="search-page">
            <div className="search-bar">
                <div className="label-box">
                    <p className="label">
                        Search for
                    </p>
                </div>
                <input
                    className="search-input"
                    placeholder="restaurants, services, deals..."
                />
                <button 
                    className="search-button"
                >
                    <img 
                        src={search}
                        alt="Search icon"
                        className="search-icon"
                    />
                </button>
                
            </div>
        </div>
    )
}

export default Search;