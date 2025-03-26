import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import EssaysIcon from "../../images/essay.svg";
import EssayLink from "../entry-links/EssayLink";

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
			<div className="index-section__content essays-grid">{Essays}</div>
		</section>
	);
};

export default Essays;
