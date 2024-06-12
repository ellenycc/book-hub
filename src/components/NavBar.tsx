import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/book-logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" padding={3} />
      <Text>BookMate</Text>
    </HStack>
  );
};

export default NavBar;
