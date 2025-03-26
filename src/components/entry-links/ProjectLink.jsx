import React from "react";
import { Link } from "gatsby";

const ProjectLink = ({ project }) => {
	return (
		<Link
			className="project-link"
			to={project.frontmatter.type + project.frontmatter.slug}
		>
			<div className="project-link__icon">
				<img src={"/assets/photos/" + project.frontmatter.icon} />
				sdf
			</div>
			<h4 className="project-link__title">{project.frontmatter.title}</h4>
			<h5 className="project-link__subtitle">
				{project.frontmatter.subtitle}
			</h5>
		</Link>
	);
};

export default ProjectLink;
