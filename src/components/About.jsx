//Project files
import "../styles/About.css";

export default function About() {
	return (
		<section className="bg-light" id="about">
			<div className="about container">
				<h1 className="about-header">About Haiwei</h1>
				<div className="about-info">
					<p className="about-paragraph">
						Hi! I'm Haiwei, grew up in China , a frontend developer from Stockholm
						Sweden. Focus on frontend skills and enjoy creating delightful experiences!
						I love walking, reading, listening music, learning new things and really
						love coding!
					</p>

					<div className="about-illustartion">
						<img
							className="img"
							src="images/illustration-2.png"
							alt="Woman Coder illustrtion"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
