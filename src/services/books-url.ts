const API_KEY = "AIzaSyAje9Kn4hBLvO4yWkAX7BNGrHYpzB19jt0";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export interface BookQuery {
  searchText?: string;
  sortOrder?: string;
  id?: string;
}

const getBooksUrl = ({ searchText = "", sortOrder, id }: BookQuery): string => {
  if (id) {
    return `${BASE_URL}/${id}?key=${API_KEY}`;
  }

  let url = `${BASE_URL}?q=${encodeURIComponent(searchText)}&key=${API_KEY}`;

  if (sortOrder) {
    url += `&orderBy=${sortOrder}`;
  }

  return url;
};

export default getBooksUrl;
