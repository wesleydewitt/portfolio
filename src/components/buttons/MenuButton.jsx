import React, { useState } from "react";
import MenuIcon from "../icons/MenuIcon";

const SearchButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        document.body.classList.toggle("dark-mode");
    };

    const toggleVisibility = () => {
        document
            .getElementById("header__wrapper")
            .classList.toggle("has-background");
        setIsVisible(!isVisible);
    };

    return (
        <button
            className="menu-button"
            id="menu-button"
            onClick={toggleVisibility}
        >
            <span className="button__text">Menu</span>
            <span className="button__icon">
                <MenuIcon />
            </span>
        </button>
    );
};

export default SearchButton;
