//NPM packages
import { useState } from "react";

//Projects files
import ModalForm from "./ModalForm";
import "../styles/Card.css";

function Card({ item }) {
  const { imageURL, title, isOpen } = item;

  // Local state
  const [showModal, setShowModal] = useState(false);

  //Methods

  function typeOfCard() {
    var element = document.getElementById("card");
    var parent = element.parentNode.parentNode;
    parent === "projects-cards" ? setShowModal(false) : setShowModal(true);
  }

  return (
    <div id="card" onClick={typeOfCard}>
      <div className="card">
        <img src={imageURL} alt={title} onClick={typeOfCard} />

        {/* {isCompleted === false && (
            <div className="project_text">
              <h4>Coming Soon</h4>
            </div>
          )} */}

        <div className="card-body">
          <h3 className="card-text">{title}</h3>
        </div>
      </div>

      <ModalForm item={item} modalState={[showModal, setShowModal]} />
    </div>
  );
}

export default Card;
