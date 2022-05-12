//NPM packages
import { useState } from "react";

//Projects files
import ModalForm from "./ModalForm";
import { useModal } from "../state/ModalContext";
import "../styles/CardProject.css";

function CardProject({ item }) {
	const { setModal } = useModal();
	const { imageURL, title, isOpen } = item;

	// Local state
	const [showModal, setShowModal] = useState(false);

	//Methods
	function openModal() {
		//setShowModal(true);
	}

	return (
		<div className="card-project" onClick={isOpen ? openModal : null}>
			<div className="card" onClick={() => setModal(<ModalForm item={item} />)}>
				<div className="img-project">
					<img src={imageURL} alt={title} />
				</div>
				{!isOpen && (
					<div className="lock">
						<h3>COMING SOON</h3>
					</div>
				)}

				<div className="card-body">
					<h3 className="card-text">{title}</h3>
				</div>
			</div>

			{/* <ModalForm item={item} modalState={[showModal, setShowModal]} /> */}
		</div>
	);
}

export default CardProject;
