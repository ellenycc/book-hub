import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/bookhub-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} width="180px" padding="10px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
