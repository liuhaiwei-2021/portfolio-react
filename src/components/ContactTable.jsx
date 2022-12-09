//Projects files
import contact from "../data/contact.json";

export default function ContactTable() {
	return (
		<table className="contact-table">
			<tbody>
				{contact.map((item, index) => (
					<tr key={index}>
						<td>{item.title}</td>
						<td>
							<img src={item.imageURL} alt={item.title} />
							{item.content}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
