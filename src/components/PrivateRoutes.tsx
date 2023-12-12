import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserQueryStore from "../userstore";

const PrivateRoutes = () => {
  const userQuery = useUserQueryStore((s) => s.userQuery);

  const { data: user } = useAuth(userQuery.user, userQuery.password); //get from form
  console.log(user);
  if (!user) return <Navigate to={"/login"} />;
  return <Outlet />;
};

export default PrivateRoutes;
