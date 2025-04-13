import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import EssaysIcon from "../../images/essay.svg";
import EssayLink from "../entry-links/EssayLink";
import essaysStyles from "../../styles/components/index-sections/essays.scss";

const Essays = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: { frontmatter: { date: DESC } }) {
                nodes {
                    frontmatter {
                        type
                        slug
                        title
                        subtitle
                        icon
                        date(formatString: "MMMM DD, YYYY")
                    }
                    excerpt(pruneLength: 300)
                }
            }
        }
    `);

    const Essays = data.allMdx.nodes
        .filter((entry) => entry.frontmatter.type === "essay")
        .map((entry) => <EssayLink essay={entry} />);

    return (
        <section className="index-section essays">
            <h3 className="index-section__heading">
                <img className="index-section__icon" src={EssaysIcon} />
                Essays
            </h3>
            <h4 className="index-section__subheading">
                Medium- to long-form pieces on topics in culture, politics, and
                technology
            </h4>
            <div className="index-section__content essays-grid">
                {Essays}

                {/* <Link className="all-link" to="/projects">
                    All Essays
                </Link> */}
            </div>
        </section>
    );
};

export default Essays;
