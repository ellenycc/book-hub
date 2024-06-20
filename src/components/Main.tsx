import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
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
    authors: string[];
    publishedDate: string;
    imageLinks: {
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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={10}
        h="50vh"
        padding={10}
      >
        <Heading fontSize="48px">Find your book of choice</Heading>
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
      <Box paddingX={10}>
        {error && <p className="text-danger">{error}</p>}
        <Heading fontSize="24px" marginBottom={5}>
          Search Results
        </Heading>
        <BookCard results={results} />
      </Box>
    </>
  );
};

export default Main;
