import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import EssaysIcon from "../../images/essay.svg";
import EssayLink from "../entry-links/EssayLink";
import essaysStyles from "../../styles/components/index-sections/essays.scss";

const Essays = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                filter: { frontmatter: { type: { eq: "essay" } } }
                sort: { frontmatter: { date: DESC } }
            ) {
                nodes {
                    frontmatter {
                        type
                        slug
                        title
                        subtitle
                        icon
                        date(formatString: "MMMM DD, YYYY")
                    }
                    fields {
                        day
                        month_abbreviated
                    }
                    excerpt(pruneLength: 500)
                }
                totalCount
            }
        }
    `);

    const totalCount = data.allMdx.totalCount;

    const Essays = data.allMdx.nodes.map((entry) => (
        <EssayLink essay={entry} />
    ));

    return (
        <section className="index-section essays">
            <h3 className="index-section__heading">
                <img className="index-section__icon" src={EssaysIcon} />
                Writing <span className="count">[{totalCount}]</span>
            </h3>

            <h4 className="index-section__subheading">
                Medium- to long-form pieces on topics in culture and technology
            </h4>

            <div className="index-section__content essays-grid">{Essays}</div>

            <Link className="all-link" to="/projects">
                All Essays
            </Link>
        </section>
    );
};

export default Essays;
