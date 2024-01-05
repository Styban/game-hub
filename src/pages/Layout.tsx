import NavBar from "../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
const Layout = () => {
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
