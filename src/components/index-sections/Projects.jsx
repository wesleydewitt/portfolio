import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import ProjectsIcon from "../../images/project.svg";
import ProjectLink from "../entry-links/ProjectLink";
import projectsStyles from "../../styles/components/index-sections/projects.scss";

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                filter: { frontmatter: { type: { eq: "project" } } }
                sort: { frontmatter: { date: DESC } }
                limit: 2
            ) {
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
                totalCount
            }
        }
    `);

    const totalCount = data.allMdx.totalCount;

    const Projects = data.allMdx.nodes.map((entry) => (
        <ProjectLink project={entry} isNew={true} />
    ));

    return (
        <section className="index-section projects">
            <h3 className="index-section__heading">
                <img className="index-section__icon" src={ProjectsIcon} />
                Projects <span className="count">[{totalCount}]</span>
            </h3>

            {/* <h4 className="index-section__subheading">
                Apps and websites designed and written with minimalism in mind
            </h4> */}

            <div className="index-section__content projects-grid">
                {Projects}
            </div>

            <Link className="all-link" to="/projects">
                All Projects
            </Link>
        </section>
    );
};

export default Projects;
