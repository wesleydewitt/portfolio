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
                <Link activeClassName="active" to="/about">
                    Newsletter
                </Link>
                <Link activeClassName="active" to="/about">
                    About
                </Link>
                <Link activeClassName="active" to="/about">
                    Projects
                </Link>

                <Link activeClassName="active" to="/about">
                    Essays
                </Link>

                <Link activeClassName="active" to="/about">
                    Travel Writing
                </Link>

                <Link activeClassName="active" to="/about">
                    Photos
                </Link>

                <Link activeClassName="active" to="/about">
                    Reviews
                </Link>

                <Link activeClassName="active" to="/about">
                    Dailys
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
