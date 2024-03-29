//NPM packages
import { useState } from "react";

//Projects files
import ModalForm from "./ModalForm";
import { useModal } from "../state/ModalContext";
import "../styles/CardProject.css";

export default function CardProject({ item }) {
	const { setModal } = useModal();
	const { imageURL, title, isOpen } = item;

	// Local state
	const [showModal, setShowModal] = useState(false);

	//Methods
	function openModal() {
		//setShowModal(true);
	}

	return (
		<article className="card-project" onClick={isOpen ? openModal : null}>
			<div className="card" onClick={() => setModal(<ModalForm item={item} />)}>
				<div className="img-project">
					<img src={imageURL} alt={title} />
				</div>
				{!isOpen && (
					<div className="lock">
						<h3>comming soon</h3>
					</div>
				)}

				<div className="card-body">
					<h3 className="card-text">{title}</h3>
				</div>
			</div>

			{/* <ModalForm item={item} modalState={[showModal, setShowModal]} /> */}
		</article>
	);
}
