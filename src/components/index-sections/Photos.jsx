import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import PhotosIcon from "../../images/photo.svg";
import PhotoLink from "../entry-links/PhotoLink";
import photosLink from "../../styles/components/index-sections/photos.scss";

const Photos = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                limit: 6
                filter: { frontmatter: { type: { eq: "photo" } } }
                sort: { frontmatter: { date: DESC } }
            ) {
                nodes {
                    frontmatter {
                        filename
                    }
                }
                totalCount
            }
        }
    `);

    const totalCount = data.allMdx.totalCount;

    const Photos = data.allMdx.nodes.map((entry) => (
        <PhotoLink photo={entry} />
    ));

    return (
        <section className="index-section photos">
            <h3 className="index-section__heading">
                <img className="index-section__icon" src={PhotosIcon} />
                Photos <span className="count">[{totalCount}]</span>
            </h3>

            {/* <h4 className="index-section__subheading">
                Photo albums from various places
            </h4> */}

            <div className="index-section__content photos-grid">{Photos}</div>

            <Link className="all-link" to="/photos">
                All Photos
            </Link>
        </section>
    );
};

export default Photos;
