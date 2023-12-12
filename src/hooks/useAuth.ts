// const useAuth = () => ({ user: { id: 1, name: "Mosh" } });

import { useQuery } from "@tanstack/react-query";
import PHPAPICLIENT from "../api/apiClient";
import User from "../entities/User";

const apiClient = new PHPAPICLIENT<User>("/get_users.php");

const useAuth = (user?: string, password?: string) => {
  if (!user) {
    user = "";
  }

  if (!password) {
    user = "";
  }

  return useQuery({
    queryKey: ["users"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          user,
          password,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useAuth;
