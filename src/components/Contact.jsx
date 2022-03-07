//Projects files
import ContactTable from "./ContactTable";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="bg-dark" id="contact">
      <div className="contact container">
        <div className="contact-header">
          <h1>Contact</h1>
        </div>
        {/* The code of this component could be inside here in Contact. */}
        <ContactTable />
      </div>
    </div>
  );
}

export default Contact;
