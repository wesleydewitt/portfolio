import { Link } from "gatsby";
import React from "react";

const ReviewLink = ({ review }) => {
    return (
        <Link
            className="review-link"
            to={review.frontmatter.type + review.frontmatter.slug}
        >
            <div className="review-link__cover">
                <img src={"assets/reviews/images" + review.frontmatter.icon} />
            </div>
            <h4 className="review-link__title">{review.frontmatter.title}</h4>
            <div className="review-link__year">{review.frontmatter.date}</div>
        </Link>
    );
};

export default ReviewLink;
