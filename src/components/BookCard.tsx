import { Card, Image, CardBody, Text, Box, SimpleGrid } from "@chakra-ui/react";
import cover from "../assets/book-cover.jpeg";
import React, { FC } from "react";
import getCroppedImageUrl from "../services/image-url";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}
interface IBookCard {
  results: Book[];
}

const BookCard: FC<IBookCard> = (props) => {
  const displayCards = props.results.map((book) => {
    return (
      <>
        <Card
          key={book.id}
          borderRadius={10}
          maxWidth="250px"
          overflow="hidden"
        >
          <Image src={book.volumeInfo.imageLinks.thumbnail} />
          <CardBody>
            <Text fontWeight="bold">{book.volumeInfo.title}</Text>
            <Text>Author: {book.volumeInfo.authors.join(", ")}</Text>
            <Text>Published Date: {book.volumeInfo.publishedDate}</Text>
          </CardBody>
        </Card>
      </>
    );
  });

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {displayCards}
    </SimpleGrid>
  );
};

export default BookCard;
