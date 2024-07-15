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
import BookCard from "./BookCard";
import axios from "axios";
import { FormEvent, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import SortSelector from "./SortSelector";
import getBooksUrl from "../services/books-url";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate: string;
    description: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export interface BookResponse {
  items: Book[];
}

const Main = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Book[]>([]);
  const [error, setError] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchBook = (event: FormEvent) => {
    event.preventDefault();
    if (!ref.current) return;
    if (search === "") {
      setError("Please enter a search term");
      return;
    }
    setIsLoading(true);
    setError("");
    axios
      .get<BookResponse>(getBooksUrl(search))
      .then((res) => {
        setResults(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (search === "" || sortOrder === "") {
      setResults([]);
      return;
    } else {
      axios
        .get<BookResponse>(getBooksUrl(search, sortOrder))
        .then((res) => {
          setResults(res.data.items);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [search, sortOrder]);

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
                id="search"
                value={search}
                borderRadius={20}
                placeholder="Title, keyword, author or ISBN..."
                variant="customInput"
                focusBorderColor="blue.50"
                onChange={(event) => setSearch(event.target.value)}
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
            Search Results for "{search}"
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
