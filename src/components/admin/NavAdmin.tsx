import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import NavDrawer from "../NavDrawer";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBarAdmin = () => {
  const [active, setActive] = useState(true);

  return (
    <HStack padding="10px" justifyContent={"space-between"} height={"80px"}>
      <Link to={"/sellercenter"}>
        <Image src={logo} boxSize={"90px"} objectFit="cover" />
      </Link>
      <HStack spacing={5}>
        <Link to={"/sellercenter"}>
          <Text
            onClick={() => setActive(true)}
            fontWeight={active ? "bold" : "normal"}
          >
            View Games
          </Text>
        </Link>
        <Link to={"/addgame"}>
          <Text
            onClick={() => setActive(false)}
            fontWeight={active ? "normal" : "bold"}
          >
            Post Games
          </Text>
        </Link>
      </HStack>

      <NavDrawer />
    </HStack>
  );
};

export default NavBarAdmin;
