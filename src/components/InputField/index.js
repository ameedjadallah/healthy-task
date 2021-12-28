import classnames from "classnames";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inputControl: {
    display: "inline-block",
  },
  inputField: {
    minWidth: 300,
    border: "1px solid #DFE0EB",
    color: "#9FA2B4",
    height: 40,
    borderRadius: 3,
    padding: 9,
    marginLeft: 20
  },
});

function InputField({
  type,
  placeholder,
  label,
  options,
  handleChange,
  className,
  value,
}) {
  const classes = useStyles();
  return (
    <div className={classes.inputControl}>
      {label && <label>{label}</label>}

      {type === "text" && (
        <input
          className={classnames(classes.inputField, className)}
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          value={value}
          placeholder={placeholder}
        />
      )}

      {type === "select" && (
        <select
          className={classnames(classes.inputField, className)}
          onChange={(e) => handleChange(e.target.value)}
          value={value}
        >
          <option value="">{placeholder}</option>
          {options.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      )}
      {/* Continue handle all input types here if needed  */}
    </div>
  );
}

InputField.defaultProps = {
  placeholder: "",
  label: null,
  options: [],
  className: "",
  value: null
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  className: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default InputField;
