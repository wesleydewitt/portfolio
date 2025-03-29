import React, { useState } from "react";
import { Link } from "gatsby";
import { siteMetadata } from "../../gatsby-config";
import logo from "../images/logo.png";
import hamburgerIcon from "../images/hamburger-icon.svg";
import closeIcon from "../images/close-icon.svg";
import moonIcon from "../images/moon.svg";
import searchIcon from "../images/search.svg";
import About from "./index-sections/About";
import Menu from "./Menu";
import Nav from "./Nav";

const Header = ({ showNav }) => {
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
		<div className="header__wrapper" id="header__wrapper">
			<header className="header" id="header">
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

				{/* {showNav ? <Nav /> : null} */}

				<div className="buttons">
					<button className="search-button">
						<img src={searchIcon} />
					</button>

					<button className="theme-button">
						<img src={moonIcon} />
					</button>

					<button
						className="menu-button"
						id="menu-button"
						onClick={toggleVisibility}
					>
						{isVisible ? (
							<img src={closeIcon} />
						) : (
							<img src={hamburgerIcon} />
						)}
					</button>
				</div>
			</header>

			{isVisible ? <Menu /> : null}
		</div>
	);
};

export default Header;
