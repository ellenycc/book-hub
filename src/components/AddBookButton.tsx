import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import useBookListStore from "../stores/BookListStore";
import { Props } from "./Main";

const AddBookButton = ({ book }: Props) => {
  const addBook = useBookListStore((s) => s.addBook);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddBook = () => {
    addBook(book);
    setIsAdded(true);
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
      {isAdded ? "Added to Wish List" : "Add to Wish List"}
    </Button>
  );
};

export default AddBookButton;
