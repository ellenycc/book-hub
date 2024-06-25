import {
  Box,
  Center,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import BookCard from "./BookCard";
import axios from "axios";
import { FormEvent, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

interface BookResponse {
  items: [];
}

const Main = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Book[]>([]);
  const [error, setError] = useState("");

  // how to use useEffect hook to implement fetching when there's an input on the form and when the component mounts
  // useEffect(() => {
  //   if (ref.current)
  //     axios
  //       .get<BookResponse>(
  //         `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAje9Kn4hBLvO4yWkAX7BNGrHYpzB19jt0&maxResults=20`
  //       )
  //       .then((res) => setResults(res.data.items))
  //       .catch((err) => setError(err.message));
  // }, [search]);

  const searchBook = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current)
      axios
        .get<BookResponse>(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAje9Kn4hBLvO4yWkAX7BNGrHYpzB19jt0&maxResults=20`
        )
        .then((res) => setResults(res.data.items))
        .catch((err) => setError(err.message));
  };

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
                placeholder="Search books..."
                variant="customInput"
                focusBorderColor="blue.50"
                onChange={(event) => setSearch(event.target.value)}
              />
            </InputGroup>
          </form>
        </Box>
      </Center>
      <Box paddingX={10}>
        {error && <p className="text-danger">{error}</p>}
        {results.length !== 0 && (
          <Heading fontSize="24px" ml={2} my={10}>
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
