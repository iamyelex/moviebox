import Button from "../ui/Button";

const CallToAction = () => {
  return (
    <section className="text-white inline-flex flex-col lg:items-start gap-4 lg:w-[404px] pt-[93px]">
      <h3 className="text-[48px] font-bold leading-[56px]">
        John Wick 3 : Parabellum
      </h3>

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

      <p className="text-[14px] font-medium leading-[18px] w-[302px] mb-4 lg:mb-0">
        John Wick is on the run after killing a member of the international
        assassins guild, and with a $14 million price tag on his head, he is the
        target of hit men and women everywhere.
      </p>

      <Button type="primary">
        <img src="./Play.svg" alt="" />
        watch trailer
      </Button>
    </section>
  );
};

export default CallToAction;
