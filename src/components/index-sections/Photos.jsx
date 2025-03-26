import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import PhotosIcon from "../../images/photo.svg";
import PhotoLink from "../entry-links/PhotoLink";

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
		.map((entry) => <PhotoLink photo={entry} />);

	return (
		<section className="index-section photos">
			<h3 className="index-section__heading">
				<img className="index-section__icon" src={PhotosIcon} />
				Photos
			</h3>
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
