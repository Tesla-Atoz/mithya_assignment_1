import "./DetailCard.css";

function DetailCard(props) {
  return (
    <div className="card">
      <div className="container">
        <h2>{props.name}</h2>
        <h3>{props.age}</h3>
      </div>
    </div>
  );
}
export default DetailCard;
