import React from "react";
import Header from "../components/Header";
import "../styles/styles.scss";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
	return (
		<div className="page">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
