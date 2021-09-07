import PropTypes from "prop-types";

const BackButton = ({ goBack }) => (
  <div className="d-flex justify-content-end">
    <button className="btn btn-danger btn-sm rounded" onClick={() => goBack()}>
      Back
    </button>
  </div>
);

BackButton.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default BackButton;
