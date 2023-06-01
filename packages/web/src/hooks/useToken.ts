import di from "../di";
import { useEffect, useCallback } from "react";
import { useTokenState } from "../recoil/session";

const useToken = () => {
  const { session } = di;
  const [token, setToken] = useTokenState();

  const checkToken = useCallback(async () => {
    const sessionToken = await session.getToken();
    if (sessionToken) {
      setToken(sessionToken);
      session.setToken(sessionToken);
    }
  }, [session, setToken]);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return token;
};

export default useToken;
