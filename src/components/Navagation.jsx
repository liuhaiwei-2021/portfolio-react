//Project files
import "../styles/Navagation.css";

// Component length and DRY + Abstraction. -1 and -1.
// Although your component does not reach 50 lines, you could have created a component to create each item.
function Navagation() {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div>
          <a className="navbar-link" href="#hero">
            <img className="logo" src="images/logo-haiwei.png" alt="logo" />
          </a>
        </div>

        <ul className="navbar-items">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#hero">
              Hero
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tech">
              Tech Stack
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navagation;
