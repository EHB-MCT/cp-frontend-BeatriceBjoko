import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function Spotlight() {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		fetch("/api/students.json")
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
						<ProjectCard key={student.id} student={student} />
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
