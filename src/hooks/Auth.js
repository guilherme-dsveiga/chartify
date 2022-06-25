import { useEffect, useState } from "react";
import { getAuthorization, refreshAuthorization } from "../api/Login";

export const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    (async () => {
      const res = await getAuthorization(code);
      setAccessToken(res.accessToken);
      setRefreshToken(res.refreshToken);
      setExpiresIn(res.expires_in);
    })();
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;

    const interval = setInterval(async () => {
      const res = await refreshAuthorization(refreshToken);
      setAccessToken(res.accessToken);
      setExpiresIn(res.expires_in);
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return { accessToken, refreshToken, expiresIn };
};
