/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Favorite from "./Favorite";

const MovieCard = ({ items }) => {
  const { original_title, poster_path, release_date, id } = items;

  // const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;  low quality

  // const image = poster_path || "ImagePlaceholder.png";

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w780/${poster_path}`
    : "/ImagePlaceholder.png";

  return (
    <div className="relative h-[450px] lg:w-[250px]" data-testid="movie-card">
      <img
        src={poster}
        alt={original_title}
        className="h-[350px] w-full"
        data-testid="movie-poster"
      />

      <Favorite />

      <Link
        to={`/movies/${id}`}
        className="space-y-[6px] lg:space-y-[12px] my-[12px]"
      >
        <p
          className="text-xs text-[#9CA3AF] font-bold"
          data-testid="movie-release-date"
        >
          Released : {release_date}
        </p>
        <p
          className="lg:text-lg text-[#111827] font-bold leading-normal capitalize "
          data-testid="movie-title"
        >
          {original_title}
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;
