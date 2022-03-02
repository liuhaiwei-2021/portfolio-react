// Project file
import "../styles/ModalForm.css";

export default function ModalForm({ item, modalState }) {
  const { imageURL, title, desc, tech, desktopImg } = item;
  const [showModal, setShowModal] = modalState;

  // Safeguard
  if (showModal === false) return null;

  return (
    <div className="modal" onClick={() => setShowModal(false)}>
      <div className="modal-picture">
        <img className="picture" src={desktopImg} alt="picture" />
      </div>

      <div className="project-info">
        <h3 className="header">{title}</h3>
        <p className="text">{desc}</p>

        <div className="pill-group">
          {tech.length > 0 &&
            tech.map((item, index) => (
              <button key={index} className="pill">
                {item}
              </button>
            ))}
        </div>

        <div className="button-group">
          <a href="/">
            <button> Visit Website/APP</button>
          </a>
          <a href="https://github.com/liuhaiwei-2021">
            <button> Git repository</button>
          </a>
        </div>
      </div>
    </div>
  );
}
