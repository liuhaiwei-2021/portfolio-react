//Projects files
import "../styles/CardTech.css";

function CardTech({ item }) {
  const { imageURL, title } = item;
  return (
    // nesting, why wrap the component with 2 divs: card-tech and card -1
    <div className="card-tech">
      <div className="card">
        <img src={imageURL} alt={title} />
        {/* why another div, you can stylize the h3 directly -1 */}
        <div className="card-body">
          <h3 className="card-text">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default CardTech;
