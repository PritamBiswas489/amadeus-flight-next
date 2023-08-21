import { useCookies } from 'react-cookie';

const useGlobalCookies = () => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const setGlobalCookie = (name, value, options = {}) => {
    setCookie(name, value, options);
  };

  const removeGlobalCookie = (name) => {
    removeCookie(name);
  };

  return {
    cookies,
    setGlobalCookie,
    removeGlobalCookie,
  };
};

export default useGlobalCookies;
