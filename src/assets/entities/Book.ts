export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    authors?: string[];
    publishedDate: string;
    description: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}
