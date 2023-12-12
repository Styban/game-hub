import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import NavDrawer from "../NavDrawer";
import { Link } from "react-router-dom";

const NavBarAdmin = () => {
  return (
    <HStack padding="10px" justifyContent={"space-between"}>
      <Link to={"/"}>
        <Image src={logo} boxSize={"60px"} objectFit="cover" />
      </Link>
      <NavDrawer />
    </HStack>
  );
};

export default NavBarAdmin;
