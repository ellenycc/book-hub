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

  const fetchBooks = (searchText: string, order?: string) => {
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
    if (ref.current && ref.current.value.trim() !== "") {
      const currentSearch = ref.current.value;
      setSearch(currentSearch);
      fetchBooks(currentSearch, sortOrder);
    } else {
      setError("Please enter a search term");
      return;
    }
  };

  useEffect(() => {
    if (search) {
      fetchBooks(search, sortOrder);
    }
  }, [sortOrder]);

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
