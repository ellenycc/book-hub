import React from "react";
import useBookListStore from "../stores/BookListStore";
import {
  Box,
  Button,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";

const WishList = () => {
  const savedBooks = useBookListStore((s) => s.savedBooks);
  const removeBook = useBookListStore((s) => s.removeBook);
  const clearBooks = useBookListStore((s) => s.clearBooks);

  return (
    <Box maxW="800px" mx="auto" mt={8} p={5}>
      <Text fontSize="3xl" fontWeight="bold" mb={6} textAlign="center">
        My Wish List
      </Text>
      {savedBooks.length === 0 ? (
        <Text textAlign="center" color="gray.500" fontSize="xl">
          Your wishlist is empty.
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
                    <Text fontSize="xl" fontWeight="semibold">
                      {book.volumeInfo.subtitle
                        ? `${book.volumeInfo.title}: ${book.volumeInfo.subtitle}`
                        : book.volumeInfo.title}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {book.volumeInfo.authors?.join(", ")}
                    </Text>
                  </ListItem>
                </VStack>
                <Button
                  colorScheme="red"
                  variant="outline"
                  size="sm"
                  onClick={() => removeBook(book.id)}
                >
                  Remove
                </Button>
              </HStack>
            </Box>
          ))}
        </List>
      )}
      {savedBooks.length > 0 && (
        <Button
          colorScheme="red"
          variant="solid"
          mt={8}
          w="full"
          onClick={() => clearBooks()}
        >
          Clear Wish List
        </Button>
      )}
    </Box>
  );
};

export default WishList;
