import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import NavDrawer from "./NavDrawer";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <SearchInput />
      <NavDrawer />
    </HStack>
  );
};

export default NavBar;
