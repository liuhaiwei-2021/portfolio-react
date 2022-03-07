//Projects fiels
import Navagation from "./components/Navagation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

// Add "export default" in this line. I won't remove points in this project, but i will on the next one.
function App() {
  return (
    <div className="main">
      {/* Navigation (typo) */}
      <Navagation />
      <div className="content">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </div>
      {/* The tags look fine, but you can put the footer as well on the content. As only the navigation stays on top and the content is the one to scroll */}
      {/* It would make sense to keep the footer separated if it was also fixed to the screen like the navigation */}
      <Footer />
    </div>
  );
}

export default App;
