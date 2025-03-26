import { Link } from "gatsby";
import React from "react";

const PhotoLink = ({ photo }) => {
	return (
		<Link
			className="photo-link"
			to={photo.frontmatter.type + photo.frontmatter.slug}
		>
			<img src={"assets/photos/" + photo.frontmatter.filename} />
		</Link>
	);
};

export default PhotoLink;
