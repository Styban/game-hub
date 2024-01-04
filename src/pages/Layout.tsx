import NavBar from "../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import useLog from "../hooks/useLog";

const Layout = () => {
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
      <NavBar />
      <Box paddingX={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
