import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import PhotosIcon from "../../images/photo.svg";
import PhotoLink from "../entry-links/PhotoLink";
import photosLink from "../../styles/components/index-sections/photos.scss";

const Photos = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: { frontmatter: { date: DESC } }) {
                nodes {
                    frontmatter {
                        type
                        slug
                        filename
                    }
                }
            }
        }
    `);

    const Photos = data.allMdx.nodes
        .filter((entry) => entry.frontmatter.type === "photo")
        .map((entry) => <PhotoLink photo={entry} />)
        .slice(0, 12);

    return (
        <section className="index-section photos">
            <h3 className="index-section__heading">
                <img className="index-section__icon" src={PhotosIcon} />
                Photos
            </h3>

            <h4 className="index-section__subheading">
                Photo albums from various places
            </h4>

            <div className="index-section__content photos-grid">
                {Photos}
                <Link className="all-link" to="/photos">
                    All Photos
                </Link>
            </div>
        </section>
    );
};

export default Photos;
