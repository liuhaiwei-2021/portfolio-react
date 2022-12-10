//Projects files
import CardProject from "./CardProject";
import projects from "../data/projects.json";
import "../styles/Projects.css";

export default function Projects() {
	const projectCards = projects.map((item, index) => <CardProject key={index} item={item} />);

	return (
		<section className="bg-dark" id="projects">
			<div className="projects container">
				<h1 className="projects-header">Projects List</h1>

				<div className="projects-info">
					<p className="projects-paragraph">
						I like to make useful and excellent products. Here are some of my projects
						in Novare potential.
					</p>
					<div className="projects-cards" id="projects-cards">
						{projectCards}
					</div>
				</div>
			</div>
		</section>
	);
}
