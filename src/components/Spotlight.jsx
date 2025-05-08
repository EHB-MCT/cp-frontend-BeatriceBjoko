import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Spotlight() {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		fetch("/src/api/students.json")
			.then((res) => res.json())
			.then((data) => {
				// 4 willekeurige sprookjes
				const shuffled = data.sort(() => 0.5 - Math.random());
				const selected = shuffled.slice(0, 4);
				setStudents(selected);
			});
	}, []);

	return (
		<section className="spotlight">
			<div className="wrapper">
				<h2>IN THE SPOTLIGHT</h2>
				<div className="spotlight-cards">
					{students.map((student) => (
						<div className="card" key={student.id}>
							<img src={student.imgThumbnail} alt={student.fairytale} className="card-img" />
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
					))}
				</div>
				<div className="spotlight-button">
					<Link to="/projects" className="all-projects-button">
						ALL PROJECTS
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Spotlight;
