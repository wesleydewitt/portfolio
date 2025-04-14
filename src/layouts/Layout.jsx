import React from "react";
import Header from "../components/Header";
import "../styles/global.scss";
import Footer from "../components/Footer";
import { siteMetadata } from "../../gatsby-config";

const Layout = ({ children }) => {
    return (
        <div className="page" id="page">
            {/* <Header /> */}
            <main className="main">
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default Layout;
