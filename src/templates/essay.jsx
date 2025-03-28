import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Layout from "../layouts/Layout";
import essayIcon from "../images/essay.svg";

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data, children }) {
	return (
		<Layout>
			<article className="essay">
				<h1 className="essay__title">{data.mdx.frontmatter.title}</h1>
				<h2 className="essay__subtitle">
					{data.mdx.frontmatter.subtitle}
				</h2>
				<div className="essay__meta">
					<div className="type-label type-label--essay">
						<img src={essayIcon} /> Essay
					</div>
					<div className="essay__date">
						{data.mdx.frontmatter.date}
					</div>
				</div>
				<img
					className="essay__cover-image"
					src={"/assets/photos/" + data.mdx.frontmatter.image}
				/>
				<div className="essay__body">
					<MDXProvider components={shortcodes}>
						{children}
					</MDXProvider>
				</div>
			</article>
		</Layout>
	);
}

export const query = graphql`
	query ($id: String!) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				subtitle
				date(formatString: "D MMMM YYYY")
				image
			}
		}
	}
`;
