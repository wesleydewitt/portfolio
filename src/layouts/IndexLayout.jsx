import React from "react";
import Header from "../components/Header";
import "../styles/global.scss";
import Footer from "../components/Footer";
import { siteMetadata } from "../../gatsby-config";
import MenuButton from "../components/buttons/MenuButton";

const IndexLayout = ({ children }) => {
    return (
        <div className="page page--index" id="page">
            {/* <MenuButton /> */}
            <Header showNav={true} />
            <main className="main">
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default IndexLayout;
