import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/book-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Link to="/">
          <Image src={logo} boxSize="70px" padding="10px" />
        </Link>

        <Heading>BookHub</Heading>
      </HStack>
      <HStack>
        {" "}
        <Link to="/wishlist">Wish List</Link>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
