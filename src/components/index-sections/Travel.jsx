import React from "react";
import { useEffect } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import TravelIcon from "../../images/travel.svg";
import { renderToString } from "react-dom/server";

const Travel = () => {
	// Check if window is defined (so if in the browser or in node.js).
	const isBrowser = typeof window !== "undefined";

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
						date(formatString: "MMMM DD, YYYY")
						latitude
						longitude
					}
				}
			}
		}
	`);

	useEffect(() => {
		const mapIsEmpty = document.getElementById("map").innerHTML === "";

		if (mapIsEmpty) {
			var map = L.map("map", {
				doubleClickZoom: false,
				closePopupOnClick: false,
				dragging: false,
				zoomSnap: false,
				zoomDelta: false,
				trackResize: false,
				touchZoom: false,
				scrollWheelZoom: false,
				zoomControl: false,
			}).setView([39.768, -86.158], 6);

			L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
				maxZoom: 19,
				attribution:
					'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
			}).addTo(map);

			const Travels = data.allMdx.nodes
				.filter((entry) => entry.frontmatter.type === "travel")
				.map((entry) => {
					var marker = L.marker(
						[
							entry.frontmatter.latitude,
							entry.frontmatter.longitude,
						],
						{
							icon: new L.DivIcon({
								className: "map__marker",
								html: renderToString(
									<Link
										to={
											entry.frontmatter.type +
											entry.frontmatter.slug
										}
									>
										{entry.frontmatter.title}
									</Link>
								),
							}),
						}
					).addTo(map);
					// .on("click", function (e) {
					// 	console.log(1);
					// });
				});
		}
	});

	return (
		<section className="index-section travel">
			<h3 className="index-section__heading">
				<img className="index-section__icon" src={TravelIcon} />
				Travel
			</h3>
			<div className="index-section__content">
				<div className="map" id="map"></div>
			</div>
		</section>
	);
};

export default Travel;
