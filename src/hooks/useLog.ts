import { useQuery } from "@tanstack/react-query";
import PHPAPICLIENT from "../api/apiClient";

interface User {
  user_name: string;
}

const apiClient = new PHPAPICLIENT<User>("/user_login.php");

const useLog = (user: string, key: string) => {
  console.log("user_name: " + user + "key: " + key);

  return useQuery({
    queryKey: ["games", user],
    queryFn: () =>
      apiClient.get(user, {
        params: {
          user: user,
          key: key,
        },
      }),
  });
};

export default useLog;
