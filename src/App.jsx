//Projects fiels
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./styles/App.css";

function App() {
	return (
		<>
			<Modal />
			<div className="main">
				<Navigation />

				<div className="content">
					<Hero />
					<About />
					<Projects />
					<TechStack />
					<Contact />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
