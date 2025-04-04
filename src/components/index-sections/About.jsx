import React from "react";
import AboutIcon from "../../images/about.svg";
import EmailIcon from "../../images/email-icon.svg";
import GithubIcon from "../../images/github-mark.svg";
import XIcon from "../../images/x-mark.svg";
import { Link } from "gatsby";

const About = () => {
	const siteDescription = (
		<div className="site-description">
			<p>
				I'm Wesley De Witt, a coder, writer, photographer and
				videographer from Indianapolis. I'm passionate about exciting
				ideas, good aesthetics, and clear writing. I spend my days
				working as a forklift operator, while my nights and weekends are
				devoted to making things &mdash; apps, websites, essays, photos
				and videos &mdash; that are designed to delight, entertain, and
				inform.
			</p>

			<p>
				This is my web journal, a place that serves as a reposiotry of
				creative output that spans multiple creative and technical
				domains. It's a space to incubate ideas and content
				semi-privately, in a way that is publicly available but not
				immediately plugged into the systematized and socially corrosive
				content distribution algorithms of most modern social netowrks.
			</p>

			<p>
				If you have found this, then you are a seeker rather than a
				passive cosumer of internet content, a crucial difference in
				attitude.
			</p>

			<p>Please, stay a while and enjoy what you find here.</p>
		</div>
	);
	return (
		<section className="index-section about">
			<div className="index-section__content index-section__content--about-grid">
				<h3 className="index-section__heading">
					<img className="index-section__icon" src={AboutIcon} />
					Hello
				</h3>
				{siteDescription}
			</div>

			<div className="about__photo">
				<img src="/assets/photos/1.jpg" />
			</div>

			<div className="social-links">
				<div className="social-links__heading">Links</div>
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
		</section>
	);
};

export default About;
