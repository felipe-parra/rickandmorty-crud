import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import Badge from "../components/Badge";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";
import { getOneCharAction, removeCharAction } from "../redux/ducks/charsDuck";

const CharDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { charId } = useParams();
  const { show, toggle } = useModal();

  const { selected } = useSelector((state) => state.chars);

  const handleRemove = (id) => {
    console.log(id);
    dispatch(removeCharAction(id));
    history.goBack();
  };

  useEffect(() => {
    if (charId !== undefined || charId !== null) {
      dispatch(getOneCharAction(Number(charId)));
    }

    // eslint-disable-next-line
  }, [charId]);

  const { name, image, gender, species, status, origin, location } = selected;

  return (
    <div className="row">
      <Modal show={show} hide={toggle} remove={handleRemove} id={charId} />
      <div className="col-11 mt-1">
        <BackButton goBack={history.goBack} />
      </div>
      <div className="col-5 m-1">
        {image ? <img src={image} alt={name} /> : null}
      </div>
      <div className="col-6 p-1">
        <div className="card">
          <Badge status={status} />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="font-weight-bold">{"Gender : "}</span>

                {gender}
              </li>
              <li className="list-group-item">
                <span className="font-weight-bold">{"Species : "}</span>
                {species}
              </li>
              <li className="list-group-item">
                <span className="font-weight-bold">{"Origin : "}</span>
                {origin.name}
              </li>
              <li className="list-group-item">
                <span className="font-weight-bold">{"Location : "}</span>
                {location.name}
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-around m-2">
            <Link
              to={`/edit/${charId}`}
              className="btn btn-warning btn-sm rounded"
            >
              {`Edit  `}
              <span className="material-icons">edit</span>
            </Link>
            <button
              className="btn btn-danger btn-sm rounded"
              onClick={() => toggle()}
            >
              {`Remove  `}
              <span className="material-icons">delete_forever</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharDetail;
