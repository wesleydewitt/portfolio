import React from "react";
import { Link } from "gatsby";

const DailyLink = ({ daily }) => {
	const dailyUrl =
		daily.frontmatter.type +
		"/" +
		daily.fields.year +
		"/" +
		daily.fields.month +
		"/" +
		daily.fields.day;

	return (
		<Link className="daily-link" to={dailyUrl}>
			<h4 className="daily-link__title">{daily.frontmatter.title}</h4>
			<div className="daily-link__date">{daily.frontmatter.date}</div>
		</Link>
	);
};

export default DailyLink;
