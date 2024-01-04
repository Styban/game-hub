import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBarAdmin from "../components/NavBarAdmin";
import useGameQueryStore from "../store";
import useLog from "../hooks/useLog";

const LayoutAdmin = () => {
  const { user, key } = useGameQueryStore((s) => s.gameQuery);

  const user_name = user ? user : "";
  const pass = key ? key : "";

  const { data: results } = useLog(user_name, pass);

  const result = results?.length ? true : false;

  console.log(result);

  const navigate = useNavigate();

  if (!result) {
    navigate("/");
  }

  return (
    <>
      <NavBarAdmin />
      <Box paddingX={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default LayoutAdmin;
