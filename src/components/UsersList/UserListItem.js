import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Person from "@material-ui/icons/Person";

const useStyles = makeStyles({
  firstVal: {
    color: "#252733",
    fontSize: 14,
  },
  userThumbnail: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    marginRight: 24,
    background: "#efefef",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tableRow: {
    "&:hover": {
      background: "rgba(55, 81, 255,0.04)",
    },
  },
  label: {
    background: "#efefef",
    borderRadius: 100,
    padding: "0.2rem 1rem",
    color: "#fff",
    fontSize: 13,
  },
  activeLabel: {
    background: "#2ecc71",
  },
  inactiveLabel: {
    background: "#e74c3c",
  },
});

function UserListItem({name, email, gender, status }) {
  const classes = useStyles();

  return (
    <TableRow className={classes.tableRow}>
      <TableCell component="td" scope="row" className={classes.tableCell}>
        <div className="flex items-center">
          <div className={classes.userThumbnail}>
            <Person />
          </div>
          <div className={classes.firstVal}>{name}</div>
        </div>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <div className={classes.firstVal}>{email}</div>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <div className={classes.firstVal}>{gender}</div>
      </TableCell>
      <TableCell className={classes.tableCell} style={{ width: 160 }}>
        <label
          className={classnames(classes.label, {
            [classes.activeLabel]: status === "active",
            [classes.inactiveLabel]: status === "inactive",
          })}
        >
          {status}
        </label>
      </TableCell>
    </TableRow>
  );
}

UserListItem.defaultProps = {
  name: "",
  email: "",
  gender: "",
  status: ""
};

UserListItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string,
};

export default UserListItem;
