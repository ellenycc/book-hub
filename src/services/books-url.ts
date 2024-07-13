const API_KEY = "AIzaSyAje9Kn4hBLvO4yWkAX7BNGrHYpzB19jt0";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const getBooksUrl = (search: string, sortOrder?: string) => {
  if (sortOrder) {
    return `${BASE_URL}?q=${search}&orderBy=${sortOrder}`;
  }
  return `${BASE_URL}?q=${search}&key=${API_KEY}&maxResults=20`;
};

export default getBooksUrl;
