import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Main";
import BookDetailPage from "./pages/BookDetailPage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import WishList from "./pages/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "books/:id", element: <BookDetailPage /> },
      { path: "wishlist", element: <WishList /> },
    ],
  },
]);

export default router;
