const Movie = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-lg lg:text-[36px] font-bold leading-normal capitalize">
          featured movie
        </h3>

        <div className="inline-flex items-center gap-1 cursor-pointer">
          <p className="text-sm lg:text-[18px] text-[#BE123C] font-normal leading-6">
            See more
          </p>
          <img src="./right.svg" alt="arrow" className="h-4" />
        </div>
      </div>
    </>
  );
};

export default Movie;
