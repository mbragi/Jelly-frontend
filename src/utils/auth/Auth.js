import { useEffect, useState } from "react";

export const Auth = () => {
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auths = JSON.parse(localStorage.getItem("auth"));
    auths.hasOwnProperty("token") === true
      ? setAuth(auths.token)
      : setAuth(false);
    const userD = JSON.parse(localStorage.getItem("userData"));
    userD ? setUserData(userD.isAdmin) : setUserData(false);

    setLoading(false);
  }, []);

  return { auth, userData, loading };
};
