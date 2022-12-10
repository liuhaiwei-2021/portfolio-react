//Projects files
import contact from "../data/contact.json";

export default function ContactTable() {
	const Rows = contact.map((item, index) => (
		<li key={index}>
			<img src={item.imageURL} alt={item.title} />
			{item.content}
		</li>
	));

	return <ul className="contact-table">{Rows}</ul>;
}
