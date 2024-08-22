import axios from "axios";
import getBooksUrl from "../services/books-url";
import { Book } from "../assets/entities/Book";
import { BookResponse } from "../assets/entities/BookResponse";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import useBookQueryStore from "../store";

const useBooks = () => {
  const bookQuery = useBookQueryStore((s) => s.bookQuery);

  return useQuery<Book[], Error>({
    queryKey: ["books", bookQuery],
    queryFn: () =>
      axios
        .get<BookResponse>(getBooksUrl(bookQuery))
        .then((res) => res.data.items),
    enabled: !!bookQuery.searchText, // only fetch data when searchText is provided
    staleTime: ms("24h"),
  });
};

export default useBooks;
