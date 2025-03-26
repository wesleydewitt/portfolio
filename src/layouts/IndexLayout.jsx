import React from "react";
import Header from "../components/Header";
import "../styles/styles.scss";
import Footer from "../components/Footer";

const IndexLayout = ({ children }) => {
	return (
		<div className="page page--index">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default IndexLayout;
