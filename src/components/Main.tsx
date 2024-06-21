import {
  Box,
  Center,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
// import SearchInput from "./SearchInput";
import BookCard from "./BookCard";
import axios from "axios";
import { FormEvent, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate: string;
    imageLinks: {
      thumbnail?: string;
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

  const searchBook = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current)
      axios
        .get<BookResponse>(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAje9Kn4hBLvO4yWkAX7BNGrHYpzB19jt0`
        )
        .then((res) => setResults(res.data.items))
        .catch((err) => setError(err.message));
    console.log(results);
  };

  return (
    <>
      <Center>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={10}
          minHeight="60vh"
          width="60vw"
          paddingX={2}
          textAlign="center"
        >
          <Heading fontSize="48px">Find your book of choice</Heading>
          <Text fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
            sagittis purus sit amet volutpat consequat. Sapien eget mi proin sed
            libero enim.
          </Text>
          <form onSubmit={searchBook}>
            <InputGroup minWidth="50vw">
              <InputLeftElement children={<BsSearch />} />
              <Input
                ref={ref}
                id="search"
                value={search}
                borderRadius={20}
                placeholder="Search books..."
                variant="filled"
                onChange={(event) => setSearch(event.target.value)}
              />
            </InputGroup>
          </form>
        </Box>
      </Center>
      <Box paddingX={10}>
        {error && <p className="text-danger">{error}</p>}
        {results.length !== 0 && (
          <Heading fontSize="24px" marginBottom={5}>
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