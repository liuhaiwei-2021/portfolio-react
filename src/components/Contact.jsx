//Projects files
import ContactTable from "./ContactTable";
import "../styles/Contact.css";

export default function Contact() {
	return (
		<div className="bg-dark" id="contact">
			<div className="contact container">
				<h1>Contact</h1>
				<div className="contact-info">
					<p className="contact-paragraph">
						Here is my contact information, in case you want to have some coffee and
						discuss any of my projects.
					</p>
					<ContactTable />
				</div>
			</div>
		</div>
	);
}
