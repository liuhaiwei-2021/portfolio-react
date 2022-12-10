//Projects files
import tech from "../data/tech.json";
import "../styles/TechStack.css";
import CardTech from "./CardTech";

export default function TechStack() {
	const Tech = tech.length > 0 && tech.map((item) => <CardTech key={item.id} item={item} />);
	return (
		<section className="bg-light" id="tech">
			<div className="tech-stack container">
				<h1 className="teck-header">Technologies I Use</h1>
				<div className="tech-info">
					<p className="tech-paragraph">
						Here is the techology that I already know and also starting to learn.
					</p>
					<div className="tech-stack-cards" id="tech-stack-cards">
						{Tech}
					</div>
				</div>
			</div>
		</section>
	);
}
