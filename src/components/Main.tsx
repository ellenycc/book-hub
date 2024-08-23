import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import SortSelector from "./SortSelector";
import { useRef } from "react";
import useBookQueryStore from "../stores/BookQueryStore";

const Main = () => {
  const ref = useRef<HTMLInputElement>(null);
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
            What is your next read?
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} maxWidth="600px" mb={4}>
            Find your next book from our extensive library. Search by title,
            author, or ISBN. Save books to your wish list.
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
              <InputRightElement width="7rem">
                <Button h="1.75rem" size="md" onClick={() => handleSearch()}>
                  Search
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
          <SortSelector />
        </Box>
      </Center>
      <Box paddingX={{ base: 4, md: 10 }}>
        <Box marginLeft={2} marginTop={10}>
          {error && <Text color="red.500">{error.message}</Text>}
          {isLoading && <Spinner />}
        </Box>
        {results && results.length > 0 && (
          <Heading fontSize="24px" marginLeft={2} marginY={10}>
            Search Results
          </Heading>
        )}
        {results && results.length === 0 && isLoading && (
          <Center>
            <Text fontSize="xl" color="gray.500">
              No results found. Please try another search term.
            </Text>
          </Center>
        )}
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
