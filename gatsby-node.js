const path = require("path");
const postTemplate = path.resolve(`./src/templates/entry.jsx`);
const projectTemplate = path.resolve(`./src/templates/project.jsx`);
const photoTemplate = path.resolve(`./src/templates/photo.jsx`);
const essayTemplate = path.resolve(`./src/templates/essay.jsx`);
const travelTemplate = path.resolve(`./src/templates/travel.jsx`);
const dailyTemplate = path.resolve(`./src/templates/daily.jsx`);

const translateNumberMonthIntoSpelledOutMonth = (monthNumber) => {
    if (monthNumber === 1) {
        return "January";
    } else if (monthNumber === 2) {
        return "February";
    } else if (monthNumber === 3) {
        return "March";
    } else if (monthNumber === 4) {
        return "April";
    } else if (monthNumber === 5) {
        return "May";
    } else if (monthNumber === 6) {
        return "June";
    } else if (monthNumber === 7) {
        return "July";
    } else if (monthNumber === 8) {
        return "August";
    } else if (monthNumber === 9) {
        return "September";
    } else if (monthNumber === 10) {
        return "October";
    } else if (monthNumber === 11) {
        return "November";
    } else if (monthNumber === 12) {
        return "December";
    } else return null;
};

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "Mdx") {
        const dateUtc = new Date(Date.parse(node.frontmatter.date));
        const date = dateUtc.toLocaleString("en-US", { timeZone: "UTC" });
        const dateFormatted = new Date(Date.parse(date));

        const year = dateFormatted.getFullYear();
        const month = dateFormatted.getMonth() + 1;
        const year_month = `${year}-${month}`;
        const month_spelled_out = `${translateNumberMonthIntoSpelledOutMonth(
            month
        )}`;
        const month_abbreviated = month_spelled_out.substring(0, 3);

        const day = dateFormatted.getDate();

        if (node.frontmatter.type === "essay") {
            createNodeField({ node, name: "year", value: year });
            createNodeField({ node, name: "month", value: month });
            createNodeField({ node, name: "year-month", value: year_month });
            createNodeField({
                node,
                name: "month-spelled-out",
                value: month_spelled_out,
            });
            createNodeField({
                node,
                name: "month-abbreviated",
                value: month_abbreviated,
            });
            createNodeField({ node, name: "day", value: day });
        }
    }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    id
                    frontmatter {
                        type
                        slug
                        date(formatString: "YYYY-MM-DD")
                    }
                    internal {
                        contentFilePath
                    }
                    fields {
                        year
                        month
                        day
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild("Error loading MDX result", result.errors);
    }

    // Create blog post pages.
    const posts = result.data.allMdx.nodes;

    // you'll call `createPage` for each result
    posts.forEach((node) => {
        if (node.frontmatter.type === "project") {
            createPage({
                // As mentioned above you could also query something else like frontmatter.title above and use a helper function
                // like slugify to create a slug
                path: node.frontmatter.type + node.frontmatter.slug,
                // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
                component: `${projectTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
                // You can use the values in this context in
                // our page layout component
                context: { id: node.id },
            });
        } else if (node.frontmatter.type === "photo") {
            createPage({
                // As mentioned above you could also query something else like frontmatter.title above and use a helper function
                // like slugify to create a slug
                path: node.frontmatter.type + node.frontmatter.slug,
                // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
                component: `${photoTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
                // You can use the values in this context in
                // our page layout component
                context: { id: node.id },
            });
        } else if (node.frontmatter.type === "essay") {
            createPage({
                // As mentioned above you could also query something else like frontmatter.title above and use a helper function
                // like slugify to create a slug
                path: node.frontmatter.type + node.frontmatter.slug,
                // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
                component: `${essayTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
                // You can use the values in this context in
                // our page layout component
                context: { id: node.id },
            });
        } else if (node.frontmatter.type === "travel") {
            createPage({
                // As mentioned above you could also query something else like frontmatter.title above and use a helper function
                // like slugify to create a slug
                path: node.frontmatter.type + node.frontmatter.slug,
                // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
                component: `${travelTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
                // You can use the values in this context in
                // our page layout component
                context: { id: node.id },
            });
        } else {
        }
    });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /leaflet/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }
};
