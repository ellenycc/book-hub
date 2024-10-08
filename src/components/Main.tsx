import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import SortSelector from "./SortSelector";
import { useRef } from "react";
import useBookQueryStore from "../stores/BookQueryStore";
import { Book } from "../assets/entities/Book";

export interface Props {
  book: Book;
}

const Main = () => {
  const ref = useRef<HTMLInputElement>(null);
  const searchText = useBookQueryStore((s) => s.bookQuery.searchText);
  const setSearchText = useBookQueryStore((s) => s.setSearchText);
  const { data: results, error, isLoading } = useBooks();

  const handleSearch = () => {
    if (ref.current && ref.current.value.trim() !== "") {
      setSearchText(ref.current.value);
    } else {
      alert("Please enter a search term");
    }
  };

  return (
    <>
      <Center className="search-card">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={6}
          minHeight="60vh"
          width={{ base: "90vw", md: "70vw", lg: "60w" }}
          paddingY={5}
          textAlign="center"
        >
          <Heading fontSize={{ base: "32px", md: "48px" }} mb={4}>
            Dive Into Your Next Great Read
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} maxWidth="700px" mb={4}>
            Explore our extensive library with just a tap, and curate your
            personal wishlist.
          </Text>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSearch();
            }}
            style={{ width: "100%" }}
          >
            <InputGroup size="lg">
              <Input
                ref={ref}
                placeholder="Title, keyword, author or ISBN..."
                variant="customInput"
                focusBorderColor="blue.500"
                isDisabled={isLoading}
              />
              <InputRightElement width="5.25rem">
                <Button
                  h="3rem"
                  size="md"
                  colorScheme="yellow"
                  bg="yellow.300"
                  onClick={() => handleSearch()}
                >
                  Search
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
          <SortSelector />
        </Box>
      </Center>
      <Box paddingX={{ base: 4, md: 10 }} marginBottom={10}>
        <Box marginTop={10} mx="auto" textAlign="center">
          {error && <Text color="red.500">{error.message}</Text>}
          {isLoading && <Spinner />}
          {results && results.length > 0 && (
            <Heading fontSize="24px" marginLeft={2} marginY={10}>
              Search Results of "{searchText}"
            </Heading>
          )}
          {results && results.length === 0 && isLoading && (
            <Text fontSize="xl" color="gray.500">
              No results found. Please try another search term.
            </Text>
          )}
        </Box>
        <Center>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10px"
            spacing={10}
          >
            {results &&
              results.map((book) => <BookCard key={book.id} book={book} />)}
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
};

export default Main;
