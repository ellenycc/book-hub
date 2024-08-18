import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Book } from "../assets/entities/Book";
import getBooksUrl from "../services/books-url";

const useBook = (id: string) =>
  useQuery<Book, Error>({
    queryKey: ["books", id],
    queryFn: () =>
      axios.get<Book>(getBooksUrl("", undefined, id)).then((res) => res.data),
  });

export default useBook;
