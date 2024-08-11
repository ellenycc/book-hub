import axios from "axios";
import { FormEvent, useEffect, useRef, useState } from "react";
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

interface BookResponse {
  items: Book[];
}

const useBooks = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Book[]>([]);
  const [error, setError] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchBooks = (searchText: string, order: string) => {
    setIsLoading(true);
    setError("");
    axios
      .get<BookResponse>(getBooksUrl(searchText, order))
      .then((res) => {
        setResults(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  const searchBook = (event: FormEvent) => {
    event.preventDefault();
    if (!ref.current) return;
    if (search === "") {
      setError("Please enter a search term");
      return;
    }
    fetchBooks(search, sortOrder);
  };

  useEffect(() => {
    if (search === "" || sortOrder === "") {
      setResults([]);
      return;
    } else {
      fetchBooks(search, sortOrder);
    }
  }, [search, sortOrder]);

  return {
    ref,
    search,
    setSearch,
    results,
    error,
    sortOrder,
    setSortOrder,
    isLoading,
    searchBook,
  };
};

export default useBooks;
