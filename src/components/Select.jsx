import PropTypes from "prop-types";
import { Fragment } from "react";

const options = [
  { value: "Alive", name: "Alive" },
  { value: "Dead", name: "Dead" },
  { value: "unknown", name: "Unknown" },
];

const Select = ({ element, handleChange, opts = options }) => {
  const { name, value } = element;
  return (
    <Fragment>
      <label htmlFor={name}>
        {name.slice(0, 1).toUpperCase() + name.slice(1)}
      </label>
      <select
        className="custom-select"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      >
        {opts.map(({ value, name }) => (
          <option value={value} key={`key-select-${value}`}>
            {name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

Select.propTypes = {
  element: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  opts: PropTypes.array,
};

export default Select;
