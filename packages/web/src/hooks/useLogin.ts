import { useCallback } from "react";
import di from "../di";
import { useSetToken } from "../recoil/session";

const useLogin = () => {
  const { session } = di;
  const setToken = useSetToken();

  const handleLogin = useCallback(
    async (id: string, pw: string) => {
      const response = await session.login(id, pw);
      if (response) setToken(response);
    },
    [session, setToken]
  );

  return {
    handleLogin,
  };
};

export default useLogin;
