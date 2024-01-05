import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import NavDrawerAdmin from "./NavDrawerAdmin";

const NavBarAdmin = () => {
  return (
    <HStack padding="10px" height={"80px"} justifyContent={"space-between"}>
      <Link to={"/"}>
        <Image src={logo} boxSize={"90px"} objectFit="cover" />
      </Link>
      <HStack gap={6}>
        <Link to={"/admin"}>View</Link>
        <Link to={"/admin/addgame"}>Post</Link>
      </HStack>
      <NavDrawerAdmin />
    </HStack>
  );
};

export default NavBarAdmin;
