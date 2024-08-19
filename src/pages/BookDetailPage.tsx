import {
  Box,
  Heading,
  Spinner,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useBook from "../hooks/useBook";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading, error } = useBook(id!);

  if (!id) return null;

  if (isLoading) return <Spinner />;

  if (error || !book) return <Text>Error loading book details.</Text>;

  const { title, subtitle, authors, description, imageLinks } = book.volumeInfo;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} paddingX={10} spacing={2}>
      <Box>
        <Heading>{subtitle ? `${title}: ${subtitle}` : title}</Heading>
        <Text paddingTop={5} as="i">
          By {authors?.join(", ")}
        </Text>
        <Image
          height="250px"
          alignItems="center"
          objectFit="contain"
          borderRadius={4}
          marginTop={5}
          src={imageLinks ? imageLinks.thumbnail : noImage}
        />
      </Box>
      <Box>
        <Heading as="h2">Summary</Heading>
        <Text
          paddingTop={4}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Box>
    </SimpleGrid>
  );
};

export default BookDetailPage;
