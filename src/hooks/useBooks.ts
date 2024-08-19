import axios from "axios";
import getBooksUrl from "../services/books-url";
import { Book } from "../assets/entities/Book";
import { BookResponse } from "../assets/entities/BookResponse";
import { useQuery } from "@tanstack/react-query";

const useBooks = (searchText: string, order?: string) => {
  return useQuery<Book[], Error>({
    queryKey: ["books", searchText, order],
    queryFn: () =>
      axios
        .get<BookResponse>(getBooksUrl(searchText, order))
        .then((res) => res.data.items)
        .catch((err) => err.message),
    enabled: searchText !== "",
    staleTime: 1440, // 24 hours
  });
};

export default useBooks;
