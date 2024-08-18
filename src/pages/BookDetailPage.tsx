import { Box, Heading, Spinner, Text, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useBook from "../hooks/useBook";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading, error } = useBook(id!);

  if (!id) return null;

  if (isLoading) return <Spinner />;

  if (error || !book) throw error;

  const description = book.volumeInfo.description;

  return (
    <Box paddingX={5}>
      <Heading>
        {book.volumeInfo.title}: {book.volumeInfo.subtitle}
      </Heading>
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
      <Text paddingTop={4} color="#718096"></Text>
      <Text paddingTop={4} as="i">
        By {book.volumeInfo.authors?.join(", ")}
      </Text>

      <Text
        paddingTop={4}
        dangerouslySetInnerHTML={{ __html: description }}
      ></Text>
    </Box>
  );
};

export default BookDetailPage;
