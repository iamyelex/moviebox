import { NavLink, Link } from "react-router-dom";

const MovieDetailsHeader = () => {
  return (
    <>
      <nav className="hidden lg:flex flex-col gap-5 w-[226px] border rounded-tr-[45px] rounded-br-[45px] h-screen pt-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 cursor-pointer mb-[10px] px-5"
        >
          <img src="/tv.png" alt="site-logo" className="" />
          <h1 className="lg:text-2xl font-bold">MovieBox</h1>
        </Link>

        <NavLink
          to="/"
          className="flex gap-2 text-xl text-[#666666] font-semibold leading-normal px-5"
        >
          <img src="/Home.png" alt="home" className="w-8" />
          <span>Home</span>
        </NavLink>
        <NavLink
          // to={`/movies/${id}`}
          className="flex gap-2 text-xl text-[#666666] font-semibold leading-normal px-5"
        >
          <img src="/Movie.png" alt="movie" className="w-8" />
          <span>Movies</span>
        </NavLink>
        <Link className="flex gap-2 text-xl text-[#666666] font-semibold leading-normal px-5">
          <img src="/TVShow.png" alt="tv-shows" className="w-8" />
          <span>Tv Series</span>
        </Link>
        <Link className="flex gap-2 text-xl text-[rgb(102,102,102)] font-semibold leading-normal px-5">
          <img src="/Calendar.png" alt="upcoming" className="w-8" />
          <span>Upcoming</span>
        </Link>

        <div className="flex flex-col items-center w-[170px] h-[210px] px-4 mx-5 pt-[42px] border border-[#BE123C] bg-[#F8E7EB] rounded-[20px] mb-6">
          <p className="text-[15px] font-semibold text-[#333333]">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-[12px] font-medium text-[#666666]">
            50k people are playing now
          </p>
          <button className="text-[#BE123C] text-[12px] font-medium rounded-lg px-[16px] py-[2px] border border-[#BE123C] mt-1">
            Start playing
          </button>
        </div>

        <Link className="flex gap-2 text-xl text-[#666666] font-semibold leading-normal px-5">
          <img src="/Logout.png" alt="log-out" className="w-8" />
          <span>Log Out</span>
        </Link>
      </nav>
    </>
  );
};

export default MovieDetailsHeader;
