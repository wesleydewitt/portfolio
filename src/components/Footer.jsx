import React from "react";
import { Link } from "gatsby";
import footerStyles from "../styles/components/index-sections/footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__copyright">&copy; 2025 Wesley De Witt</div>
            <Link to="#header">Top &uarr;</Link>
        </footer>
    );
};

export default Footer;
