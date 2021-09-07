import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Badge from "./Badge";

const CardItem = ({ item }) => {
  const { name, status, gender, image, species, id: charId } = item;
  
  return (
    <div className="card col-md-4 col-sm-6 mt-1">
      <Badge status={status} />
      <img
        className="card-img-top"
        width="300px"
        height="auto"
        src={image}
        alt={name}
      />
      <h5 className="card-header d-flex justify-content-between bg-info text-white">
        {name}
      </h5>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Gender{" "}
            <div className="badge rounded-pill bg-dark text-white p-2">{gender}</div>
          </li>
          <li className="list-group-item">
            Species{" "}
            <div className="badge rounded-pill bg-light p-2">{species}</div>
          </li>
        </ul>
        
        <div className="d-flex justify-content-end mt-3">
          
          <Link
            to={`/detail/${charId}`}
            className="btn btn-info rounded btn-sm btn-block"
          >
            
            {`See more `}
            <span className="material-icons">visibility</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardItem;
