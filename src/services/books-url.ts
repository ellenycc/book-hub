const API_KEY = "AIzaSyAje9Kn4hBLvO4yWkAX7BNGrHYpzB19jt0";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const getBooksUrl = (search: string, sortOrder?: string, id?: string) => {
  const orderParam = sortOrder ? `&orderBy=${sortOrder}` : "";

  if (id) {
    return `${BASE_URL}/${id}?key=${API_KEY}`;
  }

  let url = `${BASE_URL}?q=${search}`;

  if (search) {
    url += `&key=${API_KEY}`;
  } else if (sortOrder) {
    url += `${orderParam}&key=${API_KEY}`;
  }

  return url;
};

export default getBooksUrl;
