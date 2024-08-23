import {
  Box,
  Heading,
  Spinner,
  Text,
  Image,
  SimpleGrid,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useBook from "../hooks/useBook";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";
import AddBookButton from "../components/AddBookButton";

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading, error } = useBook(id!);

  if (!id) return null;

  if (isLoading) return <Spinner />;

  if (error || !book) return <Text>Error loading book details.</Text>;

  const { title, subtitle, authors, description, imageLinks } = book.volumeInfo;

  return (
    <Box padding={{ base: 5, md: 10 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading size="lg" mb={4}>
            {subtitle ? `${title}: ${subtitle}` : title}
          </Heading>
          <Text fontSize="lg" mb={5} as="i">
            By {authors?.join(", ")}
          </Text>
          <Image
            height="350px"
            width="auto"
            mx={{ base: "auto", md: "0" }}
            objectFit="contain"
            borderRadius="md"
            marginTop={5}
            shadow="md"
            src={imageLinks ? imageLinks.thumbnail : noImage}
            alt={title}
          />
        </Box>
        <Box>
          <Heading as="h2" size="md" mb={4}>
            Summary
          </Heading>
          <Text
            fontSize="md"
            lineHeight="taller"
            textAlign="justify"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <AddBookButton book={book} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default BookDetailPage;
