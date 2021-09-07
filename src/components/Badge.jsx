import PropTypes from "prop-types";

const Badge = ({ status="Alive" }) => {
  let badge = "badge-";
  if (status === "Dead") {
      badge = badge +"danger"
    
  } else if (status.toLowerCase() === "unknown") {
      badge = badge +"primary"
      badge = ""
  } else {
      badge = badge +"success"
  }
  return <div className={`badge ${badge}`}>{status}</div>;
};

Badge.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Badge;
