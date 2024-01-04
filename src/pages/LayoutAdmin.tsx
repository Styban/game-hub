import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBarAdmin from "../components/NavBarAdmin";

const LayoutAdmin = () => {
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
