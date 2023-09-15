import { options } from "../utils/helper";

// LOAD TOP MOVIE FROM API
export const topMovieLoader = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated`,
    options
  );

  if (response.ok) {
    return response.json();
  }
};

// LOAD SEARCH API
export const searchMovie = async (word) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${word}&include_adult=false&language=en-US&page=1`,
    options
  );
  console.log(res);
  const data = await res.json();

  if (res.ok) {
    return data;
  }
};

// LOAD MOVIE DETAILS
export const movieDetailsLoader = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${+params.id}?language=en-US`,
    options
  );
  const data = await res.json();
  return data;
};

// loAD VIDEO TRAILER

export const videoLoader = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  );
  const data = await res.json();
  const result = data.results;
  let keys = [];

  result.map((videos) => {
    if (videos.type === "Trailer") {
      keys.push(videos.key);
    }
  });

  return keys;
};
