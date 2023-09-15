/* eslint-disable react/prop-types */
import { useState } from "react";
import { searchMovie } from "../services/APIs";
import MovieCard from "../components/MovieCard";
import Button from "../ui/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../ui/Spinner";

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const goBack = function () {
    navigate(-1);
  };

  useEffect(() => {
    const showResult = async () => {
      const result = await searchMovie(id);
      setSearchResult(result);
    };

    showResult();
  }, [id]);

  return (
    <main className="px-3 lg:px-20 py-4">
      <Button type="primary" onClick={goBack}>
        Back
      </Button>

      {searchResult?.total_results > 0 && (
        <div className="flex items-center justify-between pt-4">
          <p className="font-bold">
            Your Search Results for{" "}
            <span className="text-xl text-red-400 capitalize">
              &quot;{id}&quot;
            </span>
          </p>
        </div>
      )}

      {/* SPINNER  */}
      {!searchResult && (
        <div className="flex items-center justify-center my-20">
          <Spinner />
        </div>
      )}

      {/* SEARCH RESULTS  */}
      <section className="grid lg:grid-cols-4 lg:gap-20 pt-4 lg:pt-11">
        {searchResult?.results?.slice(0, 20).map((items) => (
          <MovieCard key={items.id} items={items} />
        ))}

        {searchResult?.total_results === 0 && (
          <p>
            No movie found for your search word{" "}
            <span className="text-xl text-red-400 capitalize">
              &quot;{id}&quot;
            </span>
          </p>
        )}
      </section>

      {/* PAGINATION  */}
    </main>
  );
};

export default SearchResult;
