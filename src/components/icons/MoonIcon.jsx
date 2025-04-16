import React from "react";
import "../../styles/components/icons/moon-icon.scss";

const MoonIcon = () => {
    return (
        <svg
            className="moon-icon-svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 6.95478C9.79506 6.98456 9.58523 7 9.37163 7C7.07127 7 5.20646 5.20914 5.20646 3C5.20646 1.88166 5.68436 0.870512 6.45474 0.144628C6.05483 0.0501256 5.63674 0 5.20646 0C2.33101 0 0 2.23858 0 5C0 7.76142 2.33101 10 5.20646 10C7.35962 10 9.20751 8.7448 10 6.95478Z"
                fill="black"
            />
        </svg>
    );
};

export default MoonIcon;
