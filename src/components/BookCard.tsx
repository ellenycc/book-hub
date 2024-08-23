import { Box, Button, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Book } from "../assets/entities/Book";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";
import useBookListStore from "../stores/BookListStore";
import { useState } from "react";

export interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  const bookImageLink = book.volumeInfo.imageLinks;
  const title = book.volumeInfo.title;
  const subtitle = book.volumeInfo.subtitle;
  const authors = book.volumeInfo.authors;
  const publishedDate = book.volumeInfo.publishedDate;

  const addBook = useBookListStore((s) => s.addBook);

  const [isAdded, setIsAdded] = useState(false);

  const handleAddBook = () => {
    addBook(book);
    setIsAdded(true);
  };
  return (
    <Card
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "lg",
        transition: "transform 0.2s ease-in-out",
      }}
      key={book.id}
      borderRadius={10}
      bg="white"
      _dark={{ bg: "gray.700" }}
      maxWidth="280px"
      overflow="hidden"
    >
      <Image
        height="280px"
        objectFit="contain"
        marginTop={5}
        src={bookImageLink ? bookImageLink.thumbnail : noImage}
      />

      <CardBody textAlign="center" padding={4}>
        <Box marginBottom={4}>
          <Link to={`/books/${book.id}`}>
            <Text fontSize="xl" fontWeight="bold" isTruncated>
              {subtitle ? `${title}: ${subtitle}` : title}
            </Text>
          </Link>
          <Text
            as="i"
            color="gray.600"
            _dark={{ color: "gray.300" }}
            fontSize="sm"
          >
            By {authors?.join(", ")}
          </Text>
          <Text paddingTop={2} color="gray.500" fontSize="sm">
            Published {publishedDate}
          </Text>
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
        </Box>
        <Box marginTop="auto"></Box>
      </CardBody>
    </Card>
  );
};

export default BookCard;
