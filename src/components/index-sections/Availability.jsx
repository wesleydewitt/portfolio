import React from "react";
import { Link } from "gatsby";
import availabilityStyles from "../../styles/components/index-sections/availability.scss";
import SocialLinks from "../SocialLinks";

const About = () => {
    return (
        <section className="index-section availability">
            <h3 className="index-section__heading">Available for hire</h3>
            <div className="index-section__content">
                <p>
                    Wesley is currently available for employment as well as
                    freelance work. If you have an opportunity for which you
                    feel he would be a good fit, please feel free to reach out.
                </p>
            </div>
            <SocialLinks />
        </section>
    );
};

export default About;
