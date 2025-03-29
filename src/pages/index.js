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

const IndexPage = () => {
	return (
		<IndexLayout>
			{/* <About /> */}
			<Projects />
			<Essays />
			<Travel />
			<Photos />
			<Dailys />
		</IndexLayout>
	);
};

export default IndexPage;

export const Head = () => (
	<>
		<title>{siteMetadata.title}</title>
		<link rel="icon" type="image/x-icon" href={favicon} />
	</>
);

// export async function getServerData() {}
