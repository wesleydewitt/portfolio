const path = require("path");
const postTemplate = path.resolve(`./src/templates/entry.jsx`);
const projectTemplate = path.resolve(`./src/templates/project.jsx`);
const photoTemplate = path.resolve(`./src/templates/photo.jsx`);
const essayTemplate = path.resolve(`./src/templates/essay.jsx`);
const travelTemplate = path.resolve(`./src/templates/travel.jsx`);

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
					}
					internal {
						contentFilePath
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
			createPage({
				// As mentioned above you could also query something else like frontmatter.title above and use a helper function
				// like slugify to create a slug
				path: node.frontmatter.type + node.frontmatter.slug,
				// Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
				component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
				// You can use the values in this context in
				// our page layout component
				context: { id: node.id },
			});
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
