// Project file
import "../styles/ModalForm.css";
import { useModal } from "../state/ModalContext";

export default function ModalForm({ item }) {
	//Global state
	const { setModal } = useModal();
	//properties
	const { title, desc, tech, desktopImg, git, web } = item;

	const Tech = tech.map((item, index) => (
		<button key={index} className="pill">
			{item}
		</button>
	));

	return (
		<div className="modal-form">
			<div className="modal-picture">
				<img className="picture" src={desktopImg} alt="app screenshot" />
			</div>

			<button className="cancel" onClick={() => setModal(null)}>
				X
			</button>

			<div className="project-info">
				<h3 className="header">{title}</h3>
				<p className="text">{desc}</p>

				<div className="pill-group">{Tech}</div>

				<div className="button-group">
					<a href={web}>
						<button className="btn-website"> Visit Website/APP</button>
					</a>
					<a href={git}>
						<button className="btn-git"> Git repository</button>
					</a>
				</div>
			</div>
		</div>
	);
}
