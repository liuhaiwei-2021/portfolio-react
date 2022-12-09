//Projects files
import tech from "../data/tech.json";
import "../styles/TechStack.css";
import CardTech from "./CardTech";

export default function TechStack() {
	return (
		<section className="bg-light" id="tech">
			<div className="tech-stack container">
				<div className="tech-info">
					<div className="tech-stack-header">
						<h1>Technologies I Use</h1>
					</div>
					<div className="tech-stack-text">
						<p>Here is the techology that I already know and also starting to learn.</p>
					</div>
				</div>

				<div className="tech-stack-cards" id="tech-stack-cards">
					{tech.length > 0 && tech.map((item) => <CardTech key={item.id} item={item} />)}
				</div>
			</div>
		</section>
	);
}
