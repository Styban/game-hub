import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import NavDrawer from "./NavDrawer";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px" height={"80px"}>
      <Link to={"/"}>
        <Image src={logo} boxSize={"90px"} objectFit="cover" />
      </Link>
      <SearchInput />
      <NavDrawer />
    </HStack>
  );
};

export default NavBar;
