import React from "react";
import SearchIcon from "../icons/SearchIcon";

const SearchButton = () => {
    return (
        <button className="search-button" id="search-button">
            <span className="button__text">Search</span>
            <span className="button__icon">
                <SearchIcon />
            </span>
        </button>
    );
};

export default SearchButton;
