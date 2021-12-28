import React from "react";
import PropTypes from "prop-types";

import TableComponent from "../TableComponent";
import UserListItem from "./UserListItem";

function UsersList({
  users,
  rowsPerPage,
  handleChangePage,
  pagination
}) {

  const tableHeadItems = ["User", "Email", "Gender", "Status"];

  return (
    users && (
      <TableComponent
        tableHead={tableHeadItems}
        total={pagination.total}
        rowsPerPage={rowsPerPage}
        colSpan={4}
        handleChangePage={handleChangePage}
        page={pagination.page}
      >
        {users.map((user, index) => {
          return (
            <UserListItem
              key={index}
              id={user.id.value}
              name={`${user.name}`}
              email={user.email}
              gender={user.gender}
              status={user.status}
            />
          );
        })}
      </TableComponent>
    )
  );
}

UsersList.defaultProps = {
  gender: "",
  nat: "",
};

UsersList.propTypes = {
  gender: PropTypes.string,
  nat: PropTypes.string,
};

export default UsersList;
