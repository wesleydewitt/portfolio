import React from "react";
import { Link } from "gatsby";

const ProjectLink = ({ project, isNew }) => {
    console.log(project.frontmatter.technologies);

    const technologies = project.frontmatter.technologies.map((tech) => (
        <span className={"tech " + tech.toLowerCase()}>{tech}</span>
    ));

    return (
        <Link
            className="project-link"
            to={project.frontmatter.type + project.frontmatter.slug}
        >
            <div className="project-link__icon">
                <img src={"/assets/photos/" + project.frontmatter.icon} />
            </div>
            <h4 className="project-link__title">
                {project.frontmatter.title}
                {/* <span className="new-label">New</span> */}
            </h4>
            <h5 className="project-link__subtitle">
                {project.frontmatter.subtitle}
            </h5>
            <div className="technologies">{technologies}</div>
        </Link>
    );
};

export default ProjectLink;
