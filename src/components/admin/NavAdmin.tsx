import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import NavDrawer from "../NavDrawer";
import { Link } from "react-router-dom";

const NavBarAdmin = () => {
  return (
    <HStack padding="10px" justifyContent={"space-between"}>
      <Link to={"/"}>
        <Image src={logo} boxSize={"60px"} objectFit="cover" />
      </Link>
      <HStack spacing={5}>
        <Link to={"/sellercenter"}>
          <Text>View Games</Text>
        </Link>
        <Link to={"/"}>
          <Text>Post Games</Text>
        </Link>
      </HStack>

      <NavDrawer />
    </HStack>
  );
};

export default NavBarAdmin;
