//Projects files
import tech from "../assets/data/tech.json";
import "../styles/TechStack.css";
import CardTech from "./CardTech";

function TechStack() {
  return (
    <section className="bg-light" id="tech">
      <div className="tech-stack container">
        <div className="tech-stack-header">
          <h1>Technologies I Use</h1>
        </div>

        <div className="tech-stack-text">
          <p>
            Here is the techology that I already know and also starting to
            learn.
          </p>
        </div>

        <div className="tech-stack-cards" id="tech-stack-cards">
          {/* Nesting -1 */}
          {/* Also, each time you do tech.length > 0 && code, you dont show me what happens if the length is 0 -1 */}
          {tech.length > 0 &&
            tech.map((item) => <CardTech key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
