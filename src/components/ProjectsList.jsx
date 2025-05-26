import ProjectCard from "./ProjectCard";

function ProjectsList({ students }) {
	return (
		<section className="allprojects">
			<div className="wrapper">
				<h2>ALL PROJECTS</h2>
				<div className="spotlight-cards">{students.length > 0 ? students.map((student) => <ProjectCard key={student.id} student={student} />) : <p>No results found.</p>}</div>
			</div>
		</section>
	);
}

export default ProjectsList;
