import axios from "axios";
import getBooksUrl from "../services/books-url";
import { Book } from "../assets/entities/Book";
import { BookResponse } from "../assets/entities/BookResponse";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

interface BookQuery {
  searchText?: string;
  sortOrder?: string;
}

const useBooks = ({ searchText, sortOrder }: BookQuery) => {
  return useQuery<Book[], Error>({
    queryKey: ["books", searchText, sortOrder],
    queryFn: () =>
      axios
        .get<BookResponse>(getBooksUrl({ searchText, sortOrder }))
        .then((res) => res.data.items),
    enabled: searchText !== "", // only fetch data when searchText is provided
    staleTime: ms("24h"),
  });
};

export default useBooks;
