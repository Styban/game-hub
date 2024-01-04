import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import NavDrawer from "./NavDrawer";
import { Link, useParams } from "react-router-dom";
import useGameQueryStore from "../store";

const NavBar = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const user = gameQuery.user;
  return (
    <HStack padding="10px" height={"80px"}>
      <Link to={`/user/${user}`}>
        <Image src={logo} boxSize={"90px"} objectFit="cover" />
      </Link>
      <SearchInput />
      <NavDrawer />
    </HStack>
  );
};

export default NavBar;
