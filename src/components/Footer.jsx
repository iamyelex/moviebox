const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-4 lg:gap-12">
        <img src="./facebook.svg" alt="" />
        <img src="./instagram.svg" alt="" />
        <img src="./twitter.svg" alt="" />
        <img src="./youtube.svg" alt="" />
      </div>

      <div className="flex items-center justify-center gap-4 lg:gap-12">
        <p className="text-xs lg:text-lg text-[#111827] font-medium lg:font-bold leading-normal">
          Conditions of Use
        </p>
        <p className="text-xs lg:text-lg text-[#111827] font-medium lg:font-bold leading-normal">
          Privacy & Policy
        </p>
        <p className="text-xs lg:text-lg text-[#111827] font-medium lg:font-bold leading-normal">
          Press Room
        </p>
      </div>

      <div className="text-xs lg:text-lg text-[#6B7280] text-center font-bold leading-normal">
        <p>&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
      </div>
    </>
  );
};

export default Footer;
