import { Link } from "react-router-dom";
import { withBase } from "../utils/helpers";

function ProjectCard({ student }) {
	return (
		<div className="card">
			<img src={withBase(student.imgThumbnail)} alt={student.fairytale} className="card-img" />
			<div className="card-details">
				<div className="text">
					<h3>{student.fairytale.toUpperCase()}</h3>
					<p>{student.nameStudent}</p>
				</div>
				<Link to={`/making-of/${student.id}`} className="info-button">
					i
				</Link>
			</div>
		</div>
	);
}

export default ProjectCard;
