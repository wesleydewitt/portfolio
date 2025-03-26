import React from "react";
import { Link } from "gatsby";

const EssayLink = ({ essay }) => {
	return (
		<Link
			className="essay-link"
			to={essay.frontmatter.type + essay.frontmatter.slug}
		>
			<div className="essay-link__icon">
				<img src={"/assets/photos/" + essay.frontmatter.icon} />
			</div>
			<h4 className="essay-link__title">{essay.frontmatter.title}</h4>
			<h5 className="essay-link__subtitle">
				{essay.frontmatter.subtitle}
			</h5>
		</Link>
	);
};

export default EssayLink;
