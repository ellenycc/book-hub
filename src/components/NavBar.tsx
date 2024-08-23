import { Button, HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/book-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px" boxShadow="md">
      <HStack spacing={4}>
        <Link to="/">
          <Image src={logo} boxSize="50px" />
        </Link>
        <Heading fontSize="2xl">BookHub</Heading>
      </HStack>
      <HStack spacing={4}>
        <Link to="/wishlist">
          <Button colorScheme="teal" variant="outline" size="md">
            Wish List
          </Button>
        </Link>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
