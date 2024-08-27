import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useBookListStore from "../stores/BookListStore";
import { Props } from "./Main";
import { FaRegHeart } from "react-icons/fa";

const AddBookButton = ({ book }: Props) => {
  const addBook = useBookListStore((s) => s.addBook);
  const savedBooks = useBookListStore((s) => s.savedBooks);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    // Check if the book is added
    const bookIsAdded = JSON.parse(
      localStorage.getItem(`added_book_${book.id}`) || "false"
    );
    if (bookIsAdded) setIsAdded(true);

    // If the book is not in the wishlist, remove the added state from localStorage
    if (!savedBooks.some((savedBook) => savedBook.id === book.id)) {
      localStorage.removeItem(`added_book_${book.id}`);
      setIsAdded(false);
    }
  }, [book.id, savedBooks]);

  const handleAddBook = () => {
    if (savedBooks.some((savedBook) => savedBook.id === book.id)) return;
    addBook(book);
    setIsAdded(true);

    // save the added state in localStorage
    localStorage.setItem(`added_book_${book.id}`, JSON.stringify(true));
  };

  return (
    <Button
      mt={5}
      colorScheme="teal"
      size="md"
      width="full"
      onClick={handleAddBook}
      _hover={{ bg: isAdded ? "green.600" : "teal.600" }}
      _active={{
        bg: isAdded ? "green.700" : "teal.700",
        transform: "scale(0.98)",
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(72, 187, 120, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
      isDisabled={isAdded}
    >
      <FaRegHeart style={{ marginRight: "4px" }} />

      {isAdded ? "Added to Wishlist" : "Add to Wishlist"}
    </Button>
  );
};

export default AddBookButton;
