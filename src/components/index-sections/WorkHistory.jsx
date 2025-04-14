import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import AboutIcon from "../../images/about.svg";
import AboutPhoto from "../../images/pic.png";
import workHistoryStyles from "../../styles/components/index-sections/work-history.scss";

const WorkHistory = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                filter: { frontmatter: { type: { eq: "work-history" } } }
                sort: { frontmatter: { startDate: DESC } }
            ) {
                nodes {
                    frontmatter {
                        type
                        slug
                        title
                        subtitle
                        icon
                        technologies
                        date(formatString: "MMM DD, YYYY")
                        employer
                        jobTitle
                        startDate(formatString: "MMM YYYY")
                        endDate(formatString: "MMM YYYY")
                        duties
                    }
                }
                totalCount
            }
        }
    `);

    const totalCount = data.allMdx.totalCount;

    const WorkHistory = data.allMdx.nodes.map((entry) => (
        <div className="work-history-item">
            <div className="work-history-item__title">
                <div className="work-history-item__job-title">
                    {entry.frontmatter.jobTitle}
                </div>

                <div className="work-history-item__employer">
                    @ {entry.frontmatter.employer}
                </div>
            </div>
            <div className="work-history-item__dates">
                {entry.frontmatter.startDate} - {entry.frontmatter.endDate}
            </div>
            <div className="work-history-item__content">
                As {entry.frontmatter.jobTitle} at {entry.frontmatter.employer},
                my duties included:
                <ul>
                    {entry.frontmatter.duties.map((duty) => (
                        <li>{duty}</li>
                    ))}
                </ul>
            </div>
        </div>
    ));

    return (
        <section className="index-section work-history">
            <h3 className="index-section__heading">
                Work History <span className="count">{totalCount}</span>
            </h3>
            <div className="index-section__content index-section__content--work-history-grid">
                {WorkHistory}
            </div>
        </section>
    );
};

export default WorkHistory;
