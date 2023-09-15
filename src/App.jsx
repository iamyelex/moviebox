import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";
import SearchResult from "./pages/SearchResult";
import { movieDetailsLoader, topMovieLoader } from "./services/APIs";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./ui/ErrorPage";
import ScrollToTop from "./ui/ScrollToTop";

function App() {
  <Toaster
    position="top-center"
    gutter={12}
    containerStyle={{
      margin: "8px",
    }}
    toastOptions={{
      // Default options for specific types
      success: {
        duration: 3000,
        theme: {
          primary: "green",
          secondary: "black",
        },
      },

      error: {
        duration: 5000,
      },

      style: {
        fontSize: "16px",
        maxWidth: "500px",
        padding: "16px 24px",
      },
    }}
  />;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <ScrollToTop />
        <Route
          path="/"
          element={<Homepage />}
          loader={topMovieLoader}
          errorElement={<ErrorPage message="something went wrong" />}
        />
        <Route
          path="/movies/:id"
          element={<MovieDetails />}
          loader={movieDetailsLoader}
        />
        <Route path="/search/:id" element={<SearchResult />} />
        <Route path="*" element={<ErrorPage message="404 page Not Found" />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
