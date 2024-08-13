const API_KEY = "AIzaSyAje9Kn4hBLvO4yWkAX7BNGrHYpzB19jt0";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const getBooksUrl = (search: string, sortOrder?: string) => {
  const orderByParam = sortOrder ? `&orderBy=${sortOrder}` : "";
  return `${BASE_URL}?q=${search}${orderByParam}&key=${API_KEY}&maxResults=20`;
};

export default getBooksUrl;
