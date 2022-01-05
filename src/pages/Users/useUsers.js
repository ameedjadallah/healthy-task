import { useState, useEffect, useCallback } from "react";

const useUsers = ({ username }) => {
  const [apiUrl, setApiUrl] = useState(process.env.REACT_APP_API_LINK);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const excuteGetUsers = useCallback(() => {
    fetch(
      `${username ? process.env.REACT_APP_API_LINK : apiUrl}&name=${username}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
  }, [username, apiUrl]);

  const callExcuteGetUsers = useCallback(() => {
    return excuteGetUsers();
  }, [excuteGetUsers]);

  const handleChangePage = (event, direction) => {
    let links = data?.meta?.pagination?.links;
    let next = links?.next;
    let prev = links?.previous;

    if (direction === "prev" && !prev) return;

    direction === "next" && next ? setApiUrl(next) : setApiUrl(prev);
  };

  const handleSearch = useCallback(() => {
    callExcuteGetUsers();
  }, [callExcuteGetUsers]);

  useEffect(() => {
    callExcuteGetUsers();
  }, [apiUrl]);

  return {
    data,
    loading,
    error,
    handleChangePage,
    handleSearch,
  };
};

export default useUsers;
