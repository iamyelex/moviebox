/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import { videoLoader } from "../services/APIs";
import { useEffect } from "react";
import { useState } from "react";

const MoviesDetailContent = ({
  overview,
  title,
  releaseDate,
  runtime,
  genres,
  id,
}) => {
  const [youtubeKey, setYoutubeKey] = useState([0]);

  useEffect(() => {
    const loadTrailer = async function () {
      const key = await videoLoader(id);
      setYoutubeKey(key[0]);
    };

    loadTrailer();
  }, [id]);

  const opts = {
    height: "420",
    width: "100%",
  };

  const navigate = useNavigate();

  const goBack = function () {
    navigate(-1);
  };

  return (
    <>
      <button
        className="absolute right-2 lg:right-14 top-2 text-[14px] text-white font-[700] bg-[#BE123C] px-[16px] py-[6px] rounded-[6px]"
        onClick={goBack}
      >
        Back
      </button>

      <div className="px-2 lg:px-0 rounded-lg">
        {/* {!youtubeKey && (
          <p className="flex items-center justify-center text-red-500 h-[380px] w-[100%] bg-black rounded-lg">
            No Tailer found !!!
          </p>
        )} */}

        {youtubeKey ? (
          <YouTube videoId={youtubeKey} opts={opts} />
        ) : (
          <p className="flex items-center justify-center text-red-500 h-[380px] w-[100%] bg-black rounded-lg">
            No Tailer found !!!
          </p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center text-center lg:text-left lg:gap-10 text-lg lg:text-[23px] text-[#404040] font-medium px-2 lg:px-4 pt-4">
        <h1 data-testid="movie-title">{title}</h1>

        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-10 ">
          <li data-testid="movie-release-date" className="list-disc">
            {releaseDate}
          </li>
          <li className="list-disc">PG-13</li>
          <li data-testid="movie-runtime" className="list-disc">
            {runtime} minutes
          </li>
        </ul>

        <div className="text-[15px] text-[#B91C1C] flex flex-col lg:flex-row gap-2 mt-2 lg:mt-0">
          {genres?.map((genre) => (
            <p
              key={genre.id}
              className="px-2 border border-[#F8E7EB] rounded-xl"
            >
              {genre.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-4 px-2 lg:px-4 pt-4">
        <p data-testid="movie-overview" className="text-xl text-[#333333]">
          {overview}
        </p>

        <div className="space-y-[12px] ">
          <button className="flex gap-2 items-center justify-center text-white w-full lg:w-[340px] lg:px-20 py-3 bg-[#BE123C] rounded-[10px]">
            <img src="/Tickets.png" alt="tickets" />
            <span>See Showtimes</span>
          </button>

          <button className="flex gap-2 items-center justify-center text-black w-full lg:w-[340px] lg:px-20 py-3 bg-[#f8E7EB] border border-[#BE123C] rounded-[10px]">
            <img src="/List.png" alt="list" />
            <span className="">More watch options</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MoviesDetailContent;
