import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {
  HomePage,
  FilmsPage,
  FilmIdPage,
  SerialsPage,
  SerialIdPage,
  SearchPage,
  ErrorPage,
} from "./pages";
import error from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "tv",
        element: <SerialsPage />,
      },
      {
        path: "tv/:id",
        element: <SerialIdPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
