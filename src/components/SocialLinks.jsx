import React from "react";
import { Link } from "gatsby";
import EmailIcon from "./icons/EmailIcon";
import GithubIcon from "./icons/GithubIcon";
import XIcon from "./icons/XIcon";
import "../styles/components/social-links.scss";
import ClipboardIcon from "./icons/ClipboardIcon";

const SocialLinks = () => {
    return (
        <div className="social-links">
            <div className="social-links__links">
                <Link className="social-link" to="/">
                    <div className="social-link__icon">
                        <EmailIcon />
                    </div>
                    <div className="social-links__heading">Email</div>
                    <div className="social-link__destination-icon">
                        <ClipboardIcon />
                    </div>
                    <div className="social-link__text">
                        hello@wesleydewitt.com
                    </div>
                </Link>
                <Link className="social-link" to="/">
                    <div className="social-link__icon">
                        <GithubIcon />
                    </div>
                    <div className="social-links__heading">Github</div>
                    <div className="social-link__destination-icon">&#8599;</div>
                    <div className="social-link__text">
                        github.com/wesleydewitt
                    </div>
                </Link>
                <Link className="social-link" to="/">
                    <div className="social-link__icon">
                        <XIcon />
                    </div>
                    <div className="social-links__heading">Twitter</div>
                    <div className="social-link__destination-icon">&#8599;</div>
                    <div className="social-link__text">x.com/@wesleydewitt</div>
                </Link>
            </div>
        </div>
    );
};

export default SocialLinks;
