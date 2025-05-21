import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		fetch("/api/students.json")
			.then((res) => res.json())
			.then((data) => setStudents(data));
	}, []);

	return (
		<section className="allprojects">
			<div className="wrapper">
				<h2>ALL PROJECTS</h2>
				<div className="spotlight-cards">
					{students.map((student) => (
						<ProjectCard key={student.id} student={student} />
					))}
				</div>
			</div>
		</section>
	);
}

export default ProjectsList;
