//Projects files
import Card from "./Card";
import tech from "../assets/data/tech.json";
import "../styles/TechStack.css";

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
          {tech.length > 0 &&
            tech.map((item) => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
