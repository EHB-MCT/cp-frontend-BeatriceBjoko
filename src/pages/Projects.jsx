import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProjectsList from "../components/ProjectsList";
import { withBase } from "../utils/helpers";

function Projects() {
	const [searchTerm, setSearchTerm] = useState("");
	const [students, setStudents] = useState([]);

	useEffect(() => {
		fetch(withBase("api/students.json"))
			.then((res) => res.json())
			.then((data) => setStudents(data));
	}, []);

	const filteredStudents = students.filter((student) => student.fairytale.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<section className="projects">
			<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<ProjectsList students={filteredStudents} />
		</section>
	);
}

export default Projects;
