const Imdb = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="./Imdb.png" alt="imdb logo" />
        <p className="text-xs leading-3 pr-[58px]">860/1000</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="./fruit.png" alt="fruit" />
        <span className="text-xs leading-3">97%</span>
      </div>
    </div>
  );
};

export default Imdb;
