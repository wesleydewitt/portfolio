import React from "react";
import { Link } from "gatsby";
import closeIcon from "../images/close-icon.svg";
import Nav from "./Nav";
import About from "./index-sections/About";

const Menu = () => {
	return (
		<div className="menu" id="menu">
			<Nav />
			{/* <About /> */}
		</div>
	);
};

export default Menu;
