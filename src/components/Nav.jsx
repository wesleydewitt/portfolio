import React from "react";
import { Link } from "gatsby";

const Nav = () => {
	return (
		<nav className="nav">
			<div className="nav__content">
				<Link activeClassName="active" to="/">
					Index
				</Link>
				<Link activeClassName="active" to="/feed">
					Feed
				</Link>
				<Link activeClassName="active" to="/feed">
					Projects
				</Link>
				<Link activeClassName="active" to="/feed">
					Essays
				</Link>
				<Link activeClassName="active" to="/feed">
					Photos
				</Link>
				<Link activeClassName="active" to="/feed">
					Travel
				</Link>
				<Link activeClassName="active" to="/feed">
					Newsletter
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
