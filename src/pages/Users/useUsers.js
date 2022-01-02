import { useState, useEffect, useCallback } from "react";
import useAxios from "axios-hooks";

const useUsers = ({username}) => {
  const [apiUrl, setApiUrl] = useState(process.env.REACT_APP_API_LINK)

  const [{ data, loading, error }, excuteGetUsers] = useAxios({
    url: `${apiUrl}&name=${username}`,
    method: "GET",
  },{
    manual: true,
  });

  const callExcuteGetUsers = useCallback(() => {
    return excuteGetUsers();
  }, [excuteGetUsers]);

  const handleChangePage = (event, direction) => {
    let links = data?.meta?.pagination?.links;
    let next = links?.next;
    let prev = links?.previous;

    if(direction === 'prev' && !prev) return;

    direction === 'next' && next ?
    setApiUrl(next) : setApiUrl(prev);

    callExcuteGetUsers();
  };

  const handleSearch = useCallback(() => {
    callExcuteGetUsers();
  }, [callExcuteGetUsers]);

  useEffect(() => {
    callExcuteGetUsers();
  }, []);

  return {
    data,
    loading,
    error,
    handleChangePage,
    handleSearch
  };
};

export default useUsers;
