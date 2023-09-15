/* eslint-disable react/prop-types */
const Button = ({ children, type, onClick }) => {
  let style;
  if (type === "primary") {
    style =
      "inline-flex justify-center gap-[8px] text-white text-[14px] font-[700] uppercase bg-red-500 px-[16px] py-[6px] rounded-[6px]";
  }

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
