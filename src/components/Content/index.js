import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";


const useStyles = makeStyles({
  content: {
    background: "#fff",
    width: "100%",
    border: "1px solid #DFE0EB",
    boxSizing: "border-box",
    borderRadius: 8,
  },
});

function Content({ children }) {
  const classes = useStyles();
  return <div className={classes.content}>{children}</div>;
}

Content.propTypes = {
  children: PropTypes.node,
};
export default Content;
