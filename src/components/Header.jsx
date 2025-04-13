import React, { useState } from "react";
import { Link } from "gatsby";
import { siteMetadata } from "../../gatsby-config";
import logo from "../images/logo.png";
import hamburgerIcon from "../images/hamburger-icon.svg";
import closeIcon from "../images/close-icon.svg";
import moonIcon from "../images/moon-icon.svg";
import searchIcon from "../images/search.svg";
import About from "./index-sections/About";
import Menu from "./Menu";
import Nav from "./Nav";
import headerStyles from "../styles/components/header.scss";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import SearchButton from "./buttons/SearchButton";
import ThemeButton from "./buttons/ThemeButton";
import MenuButton from "./buttons/MenuButton";

const Header = ({ showNav }) => {
    // const showMenuButton = false;

    return (
        <div className="header__wrapper" id="header__wrapper">
            <header className="header" id="header">
                <div className="header__top-line">
                    <Link className="header__site-logo" to="/">
                        <img src={logo} />
                    </Link>

                    <div className="header__titles">
                        <h1 className="header__site-title">
                            <Link to="/">{siteMetadata.title}</Link>
                        </h1>
                        <h2 className="header__site-subtitle">
                            {siteMetadata.subtitle}
                        </h2>
                    </div>

                    <div className="buttons">
                        <SearchButton />

                        <ThemeButton />

                        <MenuButton />
                    </div>
                </div>

                {/* <Nav /> */}
            </header>

            {/* {isVisible ? <Menu /> : null} */}
        </div>
    );
};

export default Header;
