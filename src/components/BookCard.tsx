import { Card, Image, CardBody, Text, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate: string;
    imageLinks?: {
      thumbnail?: string;
    };
  };
}
interface Props {
  results: Book[];
}

const BookCard = ({ results }: Props) => {
  const displayCards = results.map((book) => {
    return (
      <Card key={book.id} borderRadius={10} maxWidth="250px" overflow="hidden">
        <Image
          height="200px"
          objectFit="contain"
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : noImage
          }
        />
        <CardBody textAlign="center">
          <Text pb={2} fontSize="xl" fontWeight="bold">
            {book.volumeInfo.title}
          </Text>
          <Text as="i">By {book.volumeInfo.authors?.join(", ")}</Text>
          <Text pt={2} color="#718096">
            Published {book.volumeInfo.publishedDate}
          </Text>
        </CardBody>
      </Card>
    );
  });

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={10}
    >
      {displayCards}
    </SimpleGrid>
  );
};

export default BookCard;
