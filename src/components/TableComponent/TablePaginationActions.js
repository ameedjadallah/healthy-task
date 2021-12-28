import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions({ page, onPageChange }) {
  const classes = useStyles();

  const handleBackButtonClick = (event) => {
    onPageChange(event, "prev");
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, "next");
  };

  return (
    <div className={classes.root}>
      <IconButton
        disabled={page === 0}
        onClick={handleBackButtonClick}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      {page}
      <IconButton onClick={handleNextButtonClick} aria-label="next page">
        <KeyboardArrowRight />
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  onPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
};

export default TablePaginationActions;
