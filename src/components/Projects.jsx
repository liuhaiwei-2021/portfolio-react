//Projects files
import CardProject from "./CardProject";
import projects from "../assets/data/projects.json";
import "../styles/Projects.css";

function Projects() {
  return (
    <section className="bg-dark" id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1>Projects List</h1>
        </div>

        <div className="projects-text">
          <p>
            I like to make useful and excellent products. Here are some of my
            projects in Novare potential.
          </p>
        </div>

        <div className="projects-cards" id="projects-cards">
          {/* Nesting -1 */}
          {projects.length > 0 &&
            projects.map((item, index) => (
              <CardProject key={index} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
