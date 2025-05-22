import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import { withBase } from "../utils/helpers";

function MakingOfDetails() {
	const { projectId } = useParams();
	const [fairytale, setFairytale] = useState(null);

	useEffect(() => {
		fetch(withBase("api/students.json"))
			.then((res) => res.json())
			.then((data) => {
				const selected = data.find((student) => student.id === projectId);
				setFairytale(selected);
			});
	}, [projectId]);

	if (!fairytale) {
		return <p>Loading making-of...</p>;
	}

	return (
		<div className="making-of wrapper">
			<h2>MAKING-OF — {fairytale.fairytale.toUpperCase()}</h2>
			<img src={withBase(fairytale.imgBanner)} alt={fairytale.fairytale} className="banner" />

			<div className="making-of-content">
				<div className="video-section">
					<h3>EXPLAINER VIDEO</h3>
					{fairytale.videoExplainer ? <YoutubeEmbed embedId={fairytale.videoExplainer} /> : <p>There is currently no video available for this fairy tale.</p>}
				</div>

				<div className="description-section">
					<h3>DESCRIPTION</h3>
					<p>{fairytale.description || "Er is nog geen beschrijving toegevoegd."}</p>

					{fairytale.fairytalelink && (
						<a href={fairytale.fairytalelink} className="visit-button" target="_blank">
							VISIT WEBSITE
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

export default MakingOfDetails;
