/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Wesley De Witt`,
        subtitle: `Code & Prose out of Indianapolis`,
        siteUrl: `https://www.wesleydewitt.com`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "projects",
                path: "./src/_projects/",
            },
            __key: "projects",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "photos",
                path: "./src/_photos/",
            },
            __key: "photos",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "essays",
                path: "./src/_essays/",
            },
            __key: "essays",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "travel",
                path: "./src/_travel/",
            },
            __key: "travel",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "reviews",
                path: "./src/_reviews/",
            },
            __key: "reviews",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "dailys",
                path: "./src/_dailys/",
            },
            __key: "dailys",
        },
    ],
};
