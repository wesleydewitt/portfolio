import React from "react";
import { Link } from "gatsby";
import { siteMetadata } from "../../gatsby-config";
import logo from "../images/logo.png";

const Header = () => {
	return (
		<header className="header" id="header">
			<Link className="header__site-logo" to="/">
				<img src={logo} />
			</Link>
			<h1 className="header__site-title">
				<Link to="/">{siteMetadata.title}</Link>
			</h1>
			<h2 className="header__site-subtitle">{siteMetadata.subtitle}</h2>
		</header>
	);
};

export default Header;
