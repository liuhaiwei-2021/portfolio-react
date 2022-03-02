//Projects fiels
import Navagation from "./components/Navagation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="main">
      <Navagation />
      <div className="content">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
