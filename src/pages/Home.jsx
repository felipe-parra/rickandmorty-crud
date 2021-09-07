import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import { getCharsAction } from "../redux/ducks/charsDuck";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharsAction());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-fuid">
      <div className="header-container mb-3">
        
      </div>
      <Cards />
      <Link
        to="/create"
        className="btn btn-danger btn-sm rounded-circle button-create"
      >
        <span className="material-icons">add</span>
      </Link>
    </div>
  );
};

export default Home;
