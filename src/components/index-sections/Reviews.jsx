import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import ReviewLink from "../entry-links/ReviewLink";
import reviewsStyles from "../../styles/components/index-sections/reviews.scss";

const Reviews = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                filter: { frontmatter: { type: { eq: "review" } } }
                sort: { frontmatter: { date: DESC } }
            ) {
                nodes {
                    frontmatter {
                        type
                        slug
                        title
                        filename
                        icon
                        date(formatString: "YYYY")
                    }
                }
                totalCount
            }
        }
    `);

    const totalCount = data.allMdx.totalCount;

    const Reviews = data.allMdx.nodes.map((entry) => (
        <ReviewLink review={entry} />
    ));
    // .slice(0, 4);

    return (
        <section className="index-section reviews">
            <h3 className="index-section__heading">
                {/* <img className="index-section__icon" src={PhotosIcon} /> */}
                Reviews <span className="count">[{totalCount}]</span>
            </h3>

            {/* <h4 className="index-section__subheading">
                Reviews of books, movies, shows, products and places
            </h4> */}

            <div className="index-section__content reviews-grid">{Reviews}</div>

            <Link className="all-link" to="/reviews">
                All Reviews
            </Link>
        </section>
    );
};

export default Reviews;
