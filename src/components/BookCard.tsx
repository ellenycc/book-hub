import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";
import useBookListStore from "../stores/BookListStore";
import AddBookButton from "./AddBookButton";
import { Props } from "./Main";

const BookCard = ({ book }: Props) => {
  const bookImageLink = book.volumeInfo.imageLinks;
  const title = book.volumeInfo.title;
  const subtitle = book.volumeInfo.subtitle;
  const authors = book.volumeInfo.authors;
  const publishedDate = book.volumeInfo.publishedDate;

  const addBook = useBookListStore((s) => s.addBook);

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
            isTruncated
          >
            By {authors?.join(", ")}
          </Text>
          <Text paddingTop={2} color="gray.500" fontSize="sm">
            Published {publishedDate}
          </Text>
          <AddBookButton book={book} />
        </Box>
        <Box marginTop="auto"></Box>
      </CardBody>
    </Card>
  );
};

export default BookCard;
