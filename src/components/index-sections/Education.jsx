import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import AboutIcon from "../../images/about.svg";
import AboutPhoto from "../../images/pic.png";
import EducationStyles from "../../styles/components/index-sections/education.scss";

const Education = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                filter: { frontmatter: { type: { eq: "education" } } }
                sort: { frontmatter: { startDate: DESC } }
            ) {
                nodes {
                    frontmatter {
                        institution
                        degreeSought
                        startDate(formatString: "YYYY")
                        endDate(formatString: "YYYY")
                    }
                }
                totalCount
            }
        }
    `);

    const totalCount = data.allMdx.totalCount;

    const Education = data.allMdx.nodes.map((entry) => (
        <div className="education-item">
            <h4 className="education-item__degree-sought">
                {entry.frontmatter.degreeSought}
            </h4>

            <div className="education-item__institution">
                {entry.frontmatter.institution}
            </div>

            <div className="education-item__dates">
                {entry.frontmatter.startDate} - {entry.frontmatter.endDate}
            </div>
        </div>
    ));

    return (
        <section className="index-section education">
            <h3 className="index-section__heading">
                Education <span className="count">{totalCount}</span>
            </h3>
            <div className="index-section__content index-section__content--education-grid">
                {Education}
            </div>
        </section>
    );
};

export default Education;
