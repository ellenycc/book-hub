import {
  Card,
  Image,
  CardBody,
  Text,
  SimpleGrid,
  Flex,
  Box,
} from "@chakra-ui/react";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";
import BookModal from "./BookModal";

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate: string;
    description: string;
    imageLinks?: {
      thumbnail?: string;
    };
  };
}
export interface Props {
  results: Book[];
}

function BookCard({ results }: Props) {
  const displayCards = results.map((book) => {
    return (
      <Card key={book.id} borderRadius={10} maxWidth="250px" overflow="hidden">
        <Image
          height="250px"
          alignItems="center"
          objectFit="contain"
          marginTop={5}
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : noImage
          }
        />

        <CardBody className="card-body" textAlign="center">
          <Box marginBottom={5}>
            <Text pb={2} fontSize="xl" fontWeight="bold">
              {book.volumeInfo.title}
            </Text>
            <Text as="i">By {book.volumeInfo.authors?.join(", ")}</Text>
            <Text pt={2} color="#718096">
              Published {book.volumeInfo.publishedDate}
            </Text>
          </Box>

          <Box marginTop="auto">
            <BookModal
              image={book.volumeInfo.imageLinks?.thumbnail || noImage}
              summary={book.volumeInfo.description}
            />
          </Box>
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
}

export default BookCard;
