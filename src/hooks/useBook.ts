import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Book } from "../assets/entities/Book";
import getBooksUrl from "../services/books-url";
import ms from "ms";

const useBook = (id: string) =>
  useQuery<Book, Error>({
    queryKey: ["books", id],
    queryFn: () =>
      axios
        .get<Book>(getBooksUrl({ searchText: "", id }))
        .then((res) => res.data),
    staleTime: ms("24h"),
  });

export default useBook;
