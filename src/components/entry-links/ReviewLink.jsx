import { Link } from "gatsby";
import React from "react";

const ReviewLink = ({ review }) => {
    return (
        <Link
            className="reivew-link"
            to={review.frontmatter.type + review.frontmatter.slug}
        >
            <div className="review-link__cover">
                <img src={"assets/reviews/images" + review.frontmatter.icon} />
            </div>
            <h4 className="review-link__title">{review.frontmatter.title}</h4>
        </Link>
    );
};

export default ReviewLink;
