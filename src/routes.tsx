import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Main";
import BookDetailPage from "./pages/BookDetailPage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "books/:id", element: <BookDetailPage /> },
    ],
  },
]);

export default router;
