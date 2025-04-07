import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectsIcon from "../../images/project.svg";
import ProjectLink from "../entry-links/ProjectLink";
import projectsStyles from "../../styles/components/index-sections/projects.scss";

const Projects = () => {
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
                        technologies
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    `);

    const Projects = data.allMdx.nodes
        .filter((entry) => entry.frontmatter.type === "project")
        .map((entry) => <ProjectLink project={entry} isNew={true} />);

    return (
        <section className="index-section projects">
            <h3 className="index-section__heading">
                <img className="index-section__icon" src={ProjectsIcon} />
                Projects
            </h3>
            <div className="index-section__content projects-grid">
                {Projects}
            </div>
        </section>
    );
};

export default Projects;
