import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  VStack,
  Stack,
  DrawerFooter,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, useParams } from "react-router-dom";
import useGameQueryStore from "../store";

const NavDrawerAdmin = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const user = gameQuery.user;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant={"unstyled"} onClick={onOpen}>
        <HamburgerIcon boxSize={10} />
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <Stack spacing={2}>
              <NavLink to={`/admin`}>Home</NavLink>
              <NavLink to={"/admin/sellercenter"}>Admin</NavLink>
              <NavLink to={"/"}>Logout</NavLink>
              <ColorModeSwitch />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawerAdmin;
