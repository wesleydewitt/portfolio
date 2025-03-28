import React from "react";
import { Link } from "gatsby";

const Nav = () => {
	return (
		<nav className="nav">
			<Link activeClassName="active" to="/">
				Index
			</Link>
			<Link activeClassName="active" to="/feed">
				Feed
			</Link>
		</nav>
	);
};

export default Nav;
