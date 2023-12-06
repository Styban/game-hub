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
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const NavDrawer = () => {
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
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/"}>Home</NavLink>
              <ColorModeSwitch />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
