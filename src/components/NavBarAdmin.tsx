import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import NavDrawerAdmin from "./NavDrawerAdmin";

const NavBarAdmin = () => {
  return (
    <HStack padding="10px" height={"80px"}>
      <Link to={"/"}>
        <Image src={logo} boxSize={"90px"} objectFit="cover" />
      </Link>
      <SearchInput />
      <NavDrawerAdmin />
    </HStack>
  );
};

export default NavBarAdmin;
