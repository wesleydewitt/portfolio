import * as React from "react";
import { siteMetadata } from "../../gatsby-config";
import IndexLayout from "../layouts/IndexLayout";
import Essays from "../components/index-sections/Essays";
import Projects from "../components/index-sections/Projects";
import Travel from "../components/index-sections/Travel";
import About from "../components/index-sections/About";
import Photos from "../components/index-sections/Photos";

const IndexPage = () => {
	return (
		<IndexLayout>
			{/* <About /> */}
			<Projects />
			<Photos />
			<Essays />
			<Travel />
			{/* <About /> */}
		</IndexLayout>
	);
};

export default IndexPage;

export const Head = () => <title>{siteMetadata.title}</title>;

// export async function getServerData() {}
