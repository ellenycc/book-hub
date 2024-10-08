import React from "react";
import useBookListStore from "../stores/BookListStore";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WishList = () => {
  const savedBooks = useBookListStore((s) => s.savedBooks);
  const removeBook = useBookListStore((s) => s.removeBook);
  const clearBooks = useBookListStore((s) => s.clearBooks);

  return (
    <Box maxW="800px" mx="auto" my={8} p={5}>
      <Text fontSize="3xl" fontWeight="bold" mb={6} textAlign="center">
        My Wish List
      </Text>
      {savedBooks.length > 0 && (
        <Button
          colorScheme="blue"
          variant="solid"
          my={8}
          w="full"
          onClick={() => clearBooks()}
        >
          Clear Wish List
        </Button>
      )}
      {savedBooks.length === 0 ? (
        <Text textAlign="center" color="gray.500" fontSize="xl">
          Wishlist is empty.
        </Text>
      ) : (
        <List spacing={5}>
          {savedBooks.map((book) => (
            <Box
              key={book.id}
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              boxShadow="sm"
            >
              <HStack justify="space-between">
                <VStack align="start">
                  <ListItem>
                    <Link to={`/books/${book.id}`}>
                      <Text fontSize="xl" fontWeight="semibold">
                        {book.volumeInfo.subtitle
                          ? `${book.volumeInfo.title}: ${book.volumeInfo.subtitle}`
                          : book.volumeInfo.title}
                      </Text>
                    </Link>
                    <Text fontSize="md" color="gray.600">
                      {book.volumeInfo.authors?.join(", ")}
                    </Text>
                  </ListItem>
                </VStack>
                <IconButton
                  aria-label="Remove book"
                  icon={<FaRegTrashCan />}
                  colorScheme="blue"
                  variant="outline"
                  size="sm"
                  onClick={() => removeBook(book.id)}
                />
              </HStack>
            </Box>
          ))}
        </List>
      )}
    </Box>
  );
};

export default WishList;
