import {
  Box,
  Center,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";
import SortSelector from "./SortSelector";

const Main = () => {
  const {
    ref,
    search,
    setSearch,
    results,
    error,
    sortOrder,
    setSortOrder,
    isLoading,
    searchBook,
  } = useBooks();

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
          <form onSubmit={searchBook}>
            <InputGroup minWidth="50vw" size="lg">
              <InputLeftElement children={<BsSearch />} color="blue.700" />
              <Input
                ref={ref}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
          {error && <p className="text-danger">{error}</p>}
          {isLoading && <Spinner />}
        </Box>
        {results.length !== 0 && (
          <Heading fontSize="24px" marginLeft={2} marginY={10}>
            Search Results
          </Heading>
        )}
        <Center>
          <BookCard results={results} />
        </Center>
      </Box>
    </>
  );
};

export default Main;
