import React from "react";
import "../../styles/components/icons/menu-icon.scss";

const MenuIcon = () => {
    return (
        <svg
            className="menu-icon-svg"
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line y1="1" x2="12" y2="1" stroke-width="1" />
            <line y1="5" x2="12" y2="5" stroke-width="1" />
            <line y1="9" x2="12" y2="9" stroke-width="1" />
        </svg>
    );
};

export default MenuIcon;
