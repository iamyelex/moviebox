import Search from "./Search";

const Header = () => {
  return (
    <>
      <header className="text-white flex items-center justify-between">
        <div className="inline-flex items-center gap-2 lg:gap-6 cursor-pointer">
          <img src="./tv.png" alt="site-logo" className="" />
          <h1 className="lg:text-2xl font-bold">MovieBox</h1>
        </div>

        <div className="hidden lg:block">
          <Search />
        </div>

        <div className="inline-flex items-center gap-2 lg:gap-[27px]">
          <p className="text-base font-bold">Sign in</p>
          <img
            src="./Menu.svg"
            alt="menu"
            className="bg-[#BE123C] w-9 h-9 rounded-full"
          />
        </div>
      </header>

      <div className="text-white lg:hidden mt-3">
        <Search />
      </div>
    </>
  );
};

export default Header;
