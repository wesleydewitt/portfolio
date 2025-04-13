import React from "react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

const SearchButton = () => {
    return (
        <button className="theme-button" id="theme-button">
            <span className="theme-button__sun">
                <SunIcon />
            </span>
            <span className="theme-button__moon">
                <MoonIcon />
            </span>
        </button>
    );
};

export default SearchButton;
