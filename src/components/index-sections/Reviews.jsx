import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import ReviewLink from "../entry-links/ReviewLink";
import reviewsStyles from "../../styles/components/index-sections/reviews.scss";

const Reviews = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: { frontmatter: { date: DESC } }) {
                nodes {
                    frontmatter {
                        type
                        slug
                        title
                        filename
                        icon
                    }
                }
            }
        }
    `);

    const Reviews = data.allMdx.nodes
        .filter((entry) => entry.frontmatter.type === "review")
        .map((entry) => <ReviewLink review={entry} />)
        .slice(0, 4);

    return (
        <section className="index-section reviews">
            <h3 className="index-section__heading">
                {/* <img className="index-section__icon" src={PhotosIcon} /> */}
                Reviews
            </h3>
            <div className="index-section__content reviews-grid">
                {Reviews}
                <Link className="all-link" to="/reviews">
                    All Reviews
                </Link>
            </div>
        </section>
    );
};

export default Reviews;
