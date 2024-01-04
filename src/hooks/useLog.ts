import { useQuery } from "@tanstack/react-query";
import PHPAPICLIENT from "../api/apiClient";

const apiClient = new PHPAPICLIENT<string>("/user_login.php");

const useLog = (user: string, key: string) =>
  useQuery({
    queryKey: ["games", user],
    queryFn: () =>
      apiClient.get(user, {
        params: {
          user: user,
          key: key,
        },
      }),
  });

export default useLog;
