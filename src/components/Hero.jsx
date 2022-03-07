//Project files
import "../styles/Hero.css";

// good
function Hero() {
  return (
    <section className="hero" id="hero">
      <img className="hero-image" src="/images/hero.png" />
      <div className="hero-text">
        <div className="hero-heading">
          <h1>Hi There, I am Haiwei Liu</h1>
          <h3>And I'm a Frontend Developer!</h3>
        </div>
      </div>
    </section>
  );
}

export default Hero;
