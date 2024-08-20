import {
  Box,
  Center,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import SortSelector from "./SortSelector";
import { useRef, useState } from "react";

const Main = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("Relevance");
  const {
    data: results,
    error,
    isLoading,
  } = useBooks({ searchText: search, sortOrder });

  return (
    <>
      <Center className="search-card">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={10}
          minHeight="70vh"
          width="80vw"
          paddingY={5}
          textAlign="center"
        >
          <Heading fontSize="48px">What is your next read?</Heading>
          <Text fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
            sagittis purus sit amet volutpat consequat.
          </Text>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (ref.current && ref.current.value.trim() !== "") {
                setSearch(ref.current.value);
              } else {
                alert("Please enter a search term");
              }
            }}
          >
            <InputGroup minWidth="50vw" size="lg">
              <InputLeftElement children={<BsSearch />} color="blue.700" />
              <Input
                ref={ref}
                borderRadius={20}
                placeholder="Title, keyword, author or ISBN..."
                variant="customInput"
                focusBorderColor="blue.50"
              />
            </InputGroup>
          </form>
          <SortSelector
            sortOrder={sortOrder}
            onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}
          />
        </Box>
      </Center>
      <Box paddingX={10}>
        <Box marginLeft={2} marginTop={10}>
          {error && <p className="text-danger">{error.message}</p>}
          {isLoading && <Spinner />}
        </Box>
        {results && results.length > 0 && (
          <Heading fontSize="24px" marginLeft={2} marginY={10}>
            Search Results
          </Heading>
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
