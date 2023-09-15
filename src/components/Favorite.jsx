import { useState } from "react";
import Button from "../ui/Button";
import { toast } from "react-hot-toast";

const Favorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteHandler = function () {
    console.log("added to Favorite");
    setIsFavorite((oldFavorite) => !oldFavorite);

    isFavorite
      ? toast.error("removed from Favorite")
      : toast.success("successfully added to Favorite");
  };

  return (
    <>
      {!isFavorite && (
        <Button onClick={favoriteHandler}>
          <img
            src="/Heart.svg"
            alt="favorite"
            className="z-50 absolute top-1.5 right-1.5 bg-white rounded-full p-1"
          />
        </Button>
      )}

      {isFavorite && (
        <Button onClick={favoriteHandler}>
          <img
            src="/Heart.svg"
            alt="favorite"
            className="z-50 absolute top-1.5 right-1.5 bg-red-500 rounded-full p-1"
          />
        </Button>
      )}
    </>
  );
};

export default Favorite;
