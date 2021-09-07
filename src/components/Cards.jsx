import { useSelector } from "react-redux";
import CardItem from "./CardItem";

const Cards = () => {
  const { chars } = useSelector((state) => state.chars);

  return (
    <div className="d-flex row">
      {chars.length > 0 ? (
        chars.map((item) => <CardItem key={item.id} item={item} />)
      ) : (
        <p className="alert-info">Loading...</p>
      )}
    </div>
  );
};

export default Cards;
