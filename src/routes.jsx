import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { HomePage, FilmsPage, FilmIdPage, SerialsPage, SearchPage, ErrorPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "movie",
            element: <FilmsPage />,
          },
          {
            path: "movie/:id",
            element: <FilmIdPage />,
          },
          {
            path: "/tv",
            element: <SerialsPage />,
          },
          {
            path: "/search",
            element: <SearchPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
