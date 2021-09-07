import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";
import Select from "../components/Select";
import {
  createNewCharAction,
  getOneCharAction,
  updateCharAction,
} from "../redux/ducks/charsDuck";

const initiailState = {
  name: "",
  image: "",
  gender: "",
  species: "",
  status: "",
  origin: "",
  location: "",
};

const EditComponent = () => {
  const { charId } = useParams();
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { selected, loading } = useSelector((state) => state.chars);
  const [state, setState] = useState(selected);
  const type = pathname.split("/")[1];

  useEffect(() => {
    if (type === "create") {
      setState(initiailState);
    }
    if (charId !== undefined || charId !== null) {
      dispatch(getOneCharAction(Number(charId)));
    }
    // eslint-disable-next-line
  }, [charId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "edit") {
      console.log("handleSubmit - ", type);
      dispatch(updateCharAction(charId, state));
    } else {
      console.log("handleSubmit - ", type);
      console.log(state)
      dispatch(createNewCharAction(state));
    }
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <BackButton goBack={history.goBack} />
      <h3 className="text-center">
        {type === "create" ? "Create " : "Edit "} Character
      </h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group d-flex flex-row align-items-center mt-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={state.name}
            onChange={handleChange}
            placeholder="Type character name"
            onFocus={(e) => e.target.select()}
          />
          <Select
            element={{ name: "status", value: state.status }}
            handleChange={handleChange}
            opts={[
              { name: "Alive", value: "Alive" },
              { name: "Dead", value: "Dead" },
              { name: "Unknwon", value: "unknwon" },
            ]}
          />
        </div>

        <div className="form-group d-flex flex-row align-items-center mt-3">
          <Select
            element={{ name: "gender", value: state.gender }}
            handleChange={handleChange}
            opts={[
              { name: "Male", value: "Male" },
              { name: "Female", value: "Female" },
              { name: "Unknwon", value: "unknwon" },
            ]}
          />
          <label htmlFor="species">Species</label>
          <input
            type="text"
            name="species"
            id="species"
            className="form-control"
            value={state.species}
            onChange={handleChange}
            placeholder="Type character species"
            onFocus={(e) => e.target.select()}
          />
        </div>
        <div className="form-group d-flex flex-row align-items-center mt-3">
          <label htmlFor="species">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            className="form-control"
            value={state.location.name}
            onChange={handleChange}
            placeholder="Type character location"
            onFocus={(e) => e.target.select()}
          />
          <label htmlFor="species">origin</label>
          <input
            type="text"
            name="origin"
            id="origin"
            className="form-control"
            value={state.origin.name}
            onChange={handleChange}
            placeholder="Type character origin"
            onFocus={(e) => e.target.select()}
          />
        </div>
        {loading ? <Loading /> : null}
        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary btn-block"
        >
          {type === "create" ? "Create " : "Edit "}
        </button>
      </form>
    </div>
  );
};

export default EditComponent;
