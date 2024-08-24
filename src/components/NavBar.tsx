import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  Image,
} from "@chakra-ui/react";
import logo from "../assets/book-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HStack
      justifyContent="space-between"
      padding={{ base: "10px", md: "20px" }}
      boxShadow="md"
      width="100%"
    >
      {/* Logo and Title */}
      <HStack spacing={4}>
        <Link to="/">
          <Image src={logo} boxSize={{ base: "40px", md: "50px" }} />
        </Link>
        <Heading fontSize={{ base: "xl", md: "2xl" }}>BookHub</Heading>
      </HStack>

      {/* Desktop Navigation */}
      <HStack spacing={4} display={{ base: "none", md: "flex" }}>
        <Link to="/wishlist">
          <Button colorScheme="teal" variant="outline" size="md">
            <FaRegHeart style={{ marginRight: "7px" }} />
            Wishlist
          </Button>
        </Link>
        <ColorModeSwitch />
      </HStack>

      {/* Mobile Menu Button */}
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          variant="outline"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </Box>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <Box
          display={{ base: "flex", md: "none" }}
          flexDirection="column"
          position="absolute"
          top="50px"
          right="10px"
          bg="white"
          _dark={{ bg: "gray.800" }}
          boxShadow="lg"
          borderRadius="md"
          zIndex={10}
          p={4}
        >
          <Link to="/wishlist">
            <Button
              colorScheme="teal"
              variant="outline"
              width="100%"
              marginBottom={2}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaRegHeart style={{ marginRight: "7px" }} />
              Wishlist
            </Button>
          </Link>
          <ColorModeSwitch />
        </Box>
      )}
    </HStack>
  );
};

export default NavBar;
