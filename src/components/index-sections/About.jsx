import React from "react";
import AboutIcon from "../../images/about.svg";
import AboutPhoto from "../../images/logo.png";
import EmailIcon from "../../images/email-icon.svg";
import GithubIcon from "../../images/github-mark.svg";
import XIcon from "../../images/x-mark.svg";
import { Link } from "gatsby";
import aboutStyles from "../../styles/components/index-sections/about.scss";

const About = () => {
    const siteDescription = (
        <div className="site-description">
            <p>
                I'm Wesley De Witt, a coder, designer, and writer from
                Indianapolis. I love exciting ideas, good aesthetics, and clear
                writing. My days are spent working as a forklift operator, while
                my nights and weekends are devoted to making things &mdash;
                apps, websites, essays, photos and videos &mdash; that seek to
                delight, inform, and entertain.
            </p>

            <p>
                This is my web journal, a place that serves as a reposiotry of
                creative output that spans multiple domains. It's a space to
                incubate ideas and content semi-privately, in a way that publicy
                documents my creative growth but is not immediately plugged into
                the systematized and socially corrosive content distribution
                algorithms of most modern social netowrks.
            </p>

            <p>
                If you have found this, then you are a seeker rather than a
                passive cosumer of internet content, a crucial difference in
                attitude. Please, stay a while and enjoy what you find here.
            </p>
        </div>
    );
    return (
        <section className="index-section about">
            {/* <h3 className="index-section__heading">
                <img className="index-section__icon" src={AboutIcon} />
                Hello
            </h3> */}

            <div className="index-section__content index-section__content--about-grid">
                <div className="about__photo">
                    <img src={AboutPhoto} />
                </div>

                {siteDescription}
            </div>

            <div className="social-links">
                <div className="social-links__heading">Links</div>
                <Link className="social-link" to="/">
                    <div className="social-link__icon">
                        <img src={EmailIcon} />
                    </div>
                    <div className="social-link__text">
                        hello@wesleydewitt.com
                    </div>
                </Link>
                <Link className="social-link" to="/">
                    <div className="social-link__icon">
                        <img src={GithubIcon} />
                    </div>
                    <div className="social-link__text">wesleydewitt</div>
                </Link>
                <Link className="social-link" to="/">
                    <div className="social-link__icon">
                        <img src={XIcon} />
                    </div>
                    <div className="social-link__text">@wesleydewitt</div>
                </Link>
            </div>
        </section>
    );
};

export default About;
