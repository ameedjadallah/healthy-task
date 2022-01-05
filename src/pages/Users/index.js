import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";

import Layout from "../../components/Layout";
import UsersList from "../../components/UsersList";
import InputField from "../../components/InputField";
import Content from "../../components/Content";

// hooks
import useUsers from "./useUsers";

const useStyles = makeStyles({
  contentHeader: {
    padding: 30,
  },
  contentTitle: {
    fontSize: 19,
  },
});

function Users() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState();
  const [username, setUsername] = useState("");

  const { data, error, loading, handleChangePage, handleSearch } = useUsers({
    username,
  });

  useEffect(() => {
    if (loading || error) return;
    setUsers(data?.data);
    setPagination(data?.meta?.pagination);
  }, [data, loading, error]);

  const debounceOnChange = (func, time = 300) => {
    let timer = setTimeout(()=> {
      func.apply()
    }, time)

    while (timer--) {
      clearTimeout(timer);
    }
  }

  useEffect(() => {
    debounceOnChange(handleSearch);
  }, [username]);

  return (
    <Layout title="Users">
      <Content>
        <div
          className={classnames(
            "flex justify-between items-center",
            classes.contentHeader
          )}
        >
          <h3 className={classnames("m-0", classes.contentTitle)}>All users</h3>
          <div>
            <InputField
              type="text"
              placeholder="Search by name...."
              handleChange={setUsername}
              value={username}
            />
          </div>
        </div>
        {loading && <div className="text-center py-1">Loading users</div>}
        {!loading && !error && pagination?.total > 0 && (
          <UsersList
            users={users}
            pagination={pagination}
            rowsPerPage={pagination.limit}
            handleChangePage={handleChangePage}
          />
        )}
      </Content>
    </Layout>
  );
}

export default Users;
