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
import { NavLink } from "react-router-dom";
import useGameQueryStore from "../store";

const NavDrawer = () => {
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
          <DrawerHeader borderBottomWidth="1px">
            {user!.charAt(0).toUpperCase() + user!.substring(1)}
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={2}>
              <NavLink to={`/user/${user}`}>Home</NavLink>
              <NavLink to={`/user/${user}/libraries`}>Libraries</NavLink>
              <NavLink to={"/"}>Logout</NavLink>
              <ColorModeSwitch />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
