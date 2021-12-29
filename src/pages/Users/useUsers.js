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

  const debounce = (func, timeout = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  const handleDebounceSearch = useCallback(() => {
    debounce(() => callExcuteGetUsers());
  }, [callExcuteGetUsers]);

  useEffect(() => {
    callExcuteGetUsers();
  }, [callExcuteGetUsers]);

  return {
    data,
    loading,
    error,
    handleChangePage,
    handleDebounceSearch
  };
};

export default useUsers;
