import React from "react";
import AboutIcon from "../../images/about.svg";
import AboutPhoto from "../../images/pic.png";
import { Link } from "gatsby";
import aboutStyles from "../../styles/components/index-sections/about.scss";

const About = () => {
    const siteDescription = (
        <div className="site-description">
            <p>
                Wesley De Witt is a designer, writer, and aspiring front-end
                developer from Indianapolis. He loves exciting ideas, good
                aesthetics, and clear writing. His days are spent working as a
                forklift operator, while his nights and weekends are devoted to
                making things &mdash; websites, apps, essays, and photos &mdash;
                that seek to delight, inform, and entertain.
            </p>

            <p>
                This is Wesley's web journal, a place that serves as a
                reposiotry of creative output. It is anti-social media, a space
                to incubate ideas and content semi-privately, in a way that
                documents creative growth but is not immediately funneled into
                the systematized and socially corrosive algorithms of our modern
                social netowrks.
            </p>
        </div>
    );
    return (
        <section className="index-section about">
            <div className="about__photo">
                <img src={AboutPhoto} />
            </div>
            <h3 className="index-section__heading">
                <img className="index-section__icon" src={AboutIcon} />
                Hello
            </h3>
            <div className="index-section__content index-section__content--about-grid">
                {siteDescription}
            </div>
        </section>
    );
};

export default About;
