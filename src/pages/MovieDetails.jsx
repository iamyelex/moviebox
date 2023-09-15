import { useLoaderData } from "react-router-dom";

import MovieDetailsHeader from "../components/MovieDetailsHeader";
import MovieDetailsContent from "../components/MovieDetailsContent";

const MovieDetails = () => {
  const movieDetails = useLoaderData();
  const { overview, title, release_date, runtime, backdrop_path, genres, id } =
    movieDetails;

  return (
    <main className="flex gap-10 pb-12">
      <MovieDetailsHeader />

      <section className="mt-12 lg:mr-[50px]">
        <MovieDetailsContent
          overview={overview}
          title={title}
          releaseDate={release_date}
          runtime={runtime}
          background={backdrop_path}
          genres={genres}
          id={id}
          // youTubeKey= {}
        />
      </section>
    </main>
  );
};

export default MovieDetails;
