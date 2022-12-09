//Project files
import social from "../data/social.json";
import "../styles/Footer.css";

export default function Footer() {
	const Social = social.map((item, index) => (
		<div className="social-icon" key={index}>
			<a href={item.socialURL}>
				<img src={item.imageURL} alt={item.title} />
			</a>
		</div>
	));

	return (
		<div className="footer">
			<div className="social-icon-group">{Social}</div>
			<div className="footer-text">
				<p>© 2022 | Designed and built by Haiwei Liu</p>
			</div>
		</div>
	);
}
