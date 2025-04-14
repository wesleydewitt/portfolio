import React from "react";
import AboutIcon from "../../images/about.svg";
import AboutPhoto from "../../images/pic.png";
import { Link } from "gatsby";
import aboutStyles from "../../styles/components/index-sections/about.scss";

const About = () => {
    const siteDescription = (
        <div className="site-description">
            <p>
                I'm Wesley De Witt, a designer, writer, and aspiring front-end
                developer from Indianapolis. I love exciting ideas, good
                aesthetics, and clear writing. My days are spent working as a
                forklift operator, while my nights and weekends are devoted to
                making things &mdash; apps, websites, essays, photos and videos
                &mdash; that seek to delight, inform, and entertain.
            </p>

            <p>
                This is my web journal, a place that serves as a reposiotry of
                creative output that spans multiple domains. It's a space to
                incubate ideas and content semi-privately, in a way that publicy
                documents my creative growth but is not immediately plugged into
                the systematized and socially corrosive content distribution
                algorithms of most modern social netowrks.
            </p>
        </div>
    );
    return (
        <section className="index-section about">
            <div className="index-section__content index-section__content--about-grid">
                <h3 className="index-section__heading">
                    <img className="index-section__icon" src={AboutIcon} />
                    Hello
                </h3>

                {siteDescription}
            </div>

            <div className="about__photo">
                <img src={AboutPhoto} />
            </div>
        </section>
    );
};

export default About;
