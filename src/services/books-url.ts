const API_KEY = "AIzaSyAje9Kn4hBLvO4yWkAX7BNGrHYpzB19jt0";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const getBooksUrl = (search: string, sortOrder?: string, id?: string) => {
  if (id) {
    return `${BASE_URL}/${id}?key=${API_KEY}`;
  }

  let url = `${BASE_URL}?q=${encodeURIComponent(search)}&key=${API_KEY}`;

  if (sortOrder) {
    url += `&orderBy=${sortOrder}`;
  }

  return url;
};

export default getBooksUrl;
