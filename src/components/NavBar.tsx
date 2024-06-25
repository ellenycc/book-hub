import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/book-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Image src={logo} boxSize="70px" padding="10px" />
        <Heading>BookHub</Heading>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
