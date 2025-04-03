import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import DailysIcon from "../../images/essay.svg";
import DailyLink from "../entry-links/DailyLink";

const Dailys = () => {
	const data = useStaticQuery(graphql`
		query {
			allMdx(filter: { frontmatter: { type: { eq: "daily" } } }) {
				group(field: { fields: { year_month: SELECT } }) {
					nodes {
						frontmatter {
							date(formatString: "YYYY-MM-DD")
							title
							type
						}
						fields {
							year
							month
							day
							month_spelled_out
						}
					}
					fieldValue
				}
			}
		}
	`);

	const months = data.allMdx.group;

	const Dailys = months.map((month) => (
		<div className="month">
			{month.nodes.map((entry) => {
				if (entry === month.nodes[0]) {
					return (
						<>
							<h6 className="month__heading">
								{entry.fields.month_spelled_out}{" "}
								{entry.fields.year}
							</h6>
							<DailyLink daily={entry} />
						</>
					);
				} else {
					return <DailyLink daily={entry} />;
				}
			})}
		</div>
	));

	return (
		<section className="index-section dailys">
			<h3 className="index-section__heading">
				<img className="index-section__icon" src={DailysIcon} />
				Dailys
			</h3>
			<div className="index-section__content dailys-grid">{Dailys}</div>
		</section>
	);
};

export default Dailys;
