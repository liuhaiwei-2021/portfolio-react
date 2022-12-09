//Project files
import "../styles/Navigation.css";

export default function Navigation() {
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
