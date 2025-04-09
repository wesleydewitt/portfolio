import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
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
    // .slice(0, 6);

    return (
        <section className="index-section projects">
            <h3 className="index-section__heading">
                <img className="index-section__icon" src={ProjectsIcon} />
                Projects
            </h3>
            <h4 className="index-section__subheading">
                Websites, apps, and tools designed and written with precision
                and minimalism in mind
            </h4>
            <div className="index-section__content projects-grid">
                {Projects}

                {/* <Link className="all-link" to="/projects">
                    All Projects
                </Link> */}
            </div>
        </section>
    );
};

export default Projects;
