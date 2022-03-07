//Projects files
import contact from "../assets/data/contact.json";
import "../styles/ContactTable.css";

function ContactTable() {
  // Nesting -1 this is really hard to read, if you do the row as a separate element is easier to read, see the example below
  const Rows = contact.map((item, index) => (
    <tr key={index}>
      <td>{item.title}</td>
      <td>
        <img src={item.imageURL} alt={item.title} />
        {item.content}
      </td>
    </tr>
  ));

  return (
    <table className="contact-table">
      <tbody>{Rows}</tbody>
    </table>
  );
}

export default ContactTable;
