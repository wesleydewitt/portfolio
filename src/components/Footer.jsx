import React from "react";
import { Link } from "gatsby";
import footerStyles from "../styles/components/footer.scss";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import SearchIcon from "./icons/SearchIcon";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__copyright">&copy; 2025 Wesley De Witt</div>

            {/* <div className="buttons">
                <button className="search-button">
                    <span className="button__text">Search</span>
                    <SearchIcon />
                </button>

                <div className="theme-buttons">
                    <button className="theme-buttons__button theme-buttons__button--active">
                        <SunIcon />
                    </button>
                    <button className="theme-buttons__button">
                        <MoonIcon />
                    </button>
                </div>
            </div> */}

            <Link className="footer__top-link" to="#header">
                <span>Top</span>
                <span>&uarr;</span>
            </Link>
        </footer>
    );
};

export default Footer;
