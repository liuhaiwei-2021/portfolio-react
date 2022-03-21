//Projects files
import ContactTable from "./ContactTable";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="bg-dark" id="contact">
      <div className="contact container">
        <div className="contact-info">
          <h1>Contact</h1>
        </div>
        <ContactTable />
      </div>
    </div>
  );
}

export default Contact;
