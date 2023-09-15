import { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchHandler = function (e) {
    const value = e.target.value;
    setSearch(value);
  };

  const searchMovieHandler = function (e) {
    e.preventDefault();
    setSearch("");

    navigate(`/search/${search}`);
  };

  return (
    <div className="relative">
      <form onSubmit={searchMovieHandler}>
        <input
          type="search"
          name=""
          id=""
          placeholder="what do you want to watch ?"
          className="py-[6px] px-[10px] w-full lg:w-[525px] border border-[#D1D5DB] rounded-md outline-none placeholder:text-base font-normal bg-transparent"
          value={search}
          onChange={searchHandler}
        />
        <Button>
          <img
            src="./Search.svg"
            alt="search-icon"
            className="absolute right-2 top-3"
          />
        </Button>
      </form>
    </div>
  );
};

export default Search;
