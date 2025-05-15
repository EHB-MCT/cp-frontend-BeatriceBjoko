import SearchBar from "../components/SearchBar";
import ProjectsList from "../components/ProjectsList";

function Projects() {
	return (
		<section className="projects">
			<SearchBar />
			<ProjectsList />
		</section>
	);
}

export default Projects;
