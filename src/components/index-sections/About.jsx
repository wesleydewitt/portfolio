import React from "react";
import AboutIcon from "../../images/about.svg";
import EmailIcon from "../../images/email.svg";
import GithubIcon from "../../images/github-mark.svg";
import XIcon from "../../images/x-mark.svg";
import { Link } from "gatsby";

const About = () => {
	const siteDescription = (
		<div className="site-description">
			<p>
				This is the web journal of Wesley De Witt, a coder and writer
				from Indianapolis, Indiana. It is intended to be a repository of
				creative output that is available but asocial in the sense that
				it is insulated from modern social networks.
			</p>
			<p>
				Here, in addition to project links and photos, you may find
				essays on topics in culture, politics, and technology, as well
				as travel writing from around Indiana and the Midwestern United
				States.
			</p>
		</div>
	);
	return (
		<section className="index-section about">
			<h3 className="index-section__heading">
				<img className="index-section__icon" src={AboutIcon} />
				About
			</h3>
			<div className="index-section__content">
				{siteDescription}
				<div className="social-links">
					<Link className="social-link" to="/">
						<div className="social-link__icon">
							<img src={EmailIcon} />
						</div>
						<div className="social-link__text">
							hello@wesleydewitt.com
						</div>
					</Link>
					<Link className="social-link" to="/">
						<div className="social-link__icon">
							<img src={GithubIcon} />
						</div>
						<div className="social-link__text">wesleydewitt</div>
					</Link>
					<Link className="social-link" to="/">
						<div className="social-link__icon">
							<img src={XIcon} />
						</div>
						<div className="social-link__text">@wesleydewitt</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default About;
