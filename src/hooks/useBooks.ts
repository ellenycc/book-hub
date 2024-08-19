import axios from "axios";
import getBooksUrl from "../services/books-url";
import { Book } from "../assets/entities/Book";
import { BookResponse } from "../assets/entities/BookResponse";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useBooks = (searchText: string, order?: string) => {
  return useQuery<Book[], Error>({
    queryKey: ["books", searchText, order],
    queryFn: () =>
      axios
        .get<BookResponse>(getBooksUrl(searchText, order))
        .then((res) => res.data.items),
    enabled: searchText !== "",
    staleTime: ms("24h"),
  });
};

export default useBooks;
