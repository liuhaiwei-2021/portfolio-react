//Project files
import "../styles/About.css";

// Export 1 one line
export default function About() {
  return (
    <section className="bg-light" id="about">
      <div className="about container">
        <div className="about-header">
          <h1>About Haiwei</h1>
        </div>

        <div className="about-text">
          <p>
            Hi! I'm Haiwei, grew up in China , a frontend developer from
            Stockholm Sweden.
          </p>
          <p>
            Foucus on frontend skills and enjoy creating delightful and
            hunman-centered experiences!
          </p>
          <p>
            I love walking, reading, listening music, learning new things and
            really love code !
          </p>
        </div>

        <div className="about-illustartion">
          <img
            className="img"
            src="images/illustration.png"
            alt="Woman Coder illustrtion"
          />
        </div>
      </div>
    </section>
  );
}
