import * as React from "react";
import { siteMetadata } from "../../gatsby-config";
import favicon from "../images/favicon.png";
import IndexLayout from "../layouts/IndexLayout";
import Essays from "../components/index-sections/Essays";
import Projects from "../components/index-sections/Projects";
import Travel from "../components/index-sections/Travel";
import About from "../components/index-sections/About";
import Photos from "../components/index-sections/Photos";
import Dailys from "../components/index-sections/Dailys";
import Reviews from "../components/index-sections/Reviews";
import Availability from "../components/index-sections/Availability";
import WorkHistory from "../components/index-sections/WorkHistory";

const IndexPage = () => {
    return (
        <IndexLayout>
            <About />
            <Availability />
            <Projects />
            <Essays />
            <Reviews />
            <Travel />
            {/* <Photos /> */}
            {/* <Dailys /> */}
            <WorkHistory />
        </IndexLayout>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <title>{siteMetadata.title}</title>
        {/* <meta name="theme-color" content="#ffffff" /> */}
        <link rel="icon" href={favicon} />
        <link
            rel="mask-icon"
            href="{{ base_path }}/images/safari-pinned-tab.svg?v=M44lzPylqQ"
            color="#000000"
        ></link>
    </>
);

// export async function getServerData() {}
