//Projects files
import "../styles/CardTech.css";

function CardTech({ item }) {
  const { imageURL, title } = item;
  return (
    <div className="card-tech">
      <div className="card">
        <img src={imageURL} alt={title} />

        <div className="card-body">
          <h3 className="card-text">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default CardTech;
