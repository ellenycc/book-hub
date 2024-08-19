import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Book } from "../assets/entities/Book";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

export interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  const bookImageLink = book.volumeInfo.imageLinks;
  const title = book.volumeInfo.title;
  const subtitle = book.volumeInfo.subtitle;
  const authors = book.volumeInfo.authors;
  const publishedDate = book.volumeInfo.publishedDate;

  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.15s ease-in-out",
      }}
      key={book.id}
      borderRadius={10}
      maxWidth="250px"
      overflow="hidden"
    >
      <Image
        height="250px"
        alignItems="center"
        objectFit="contain"
        marginTop={5}
        src={bookImageLink ? bookImageLink.thumbnail : noImage}
      />

      <CardBody className="card-body" textAlign="center">
        <Box marginBottom={5}>
          <Link to={`/books/${book.id}`}>
            <Text pb={2} fontSize="xl" fontWeight="bold">
              {subtitle ? `${title}: ${subtitle}` : title}
            </Text>
          </Link>
          <Text as="i">By {authors?.join(", ")}</Text>
          <Text pt={2} color="#718096">
            Published {publishedDate}
          </Text>
        </Box>
        <Box marginTop="auto"></Box>
      </CardBody>
    </Card>
  );
};

export default BookCard;
