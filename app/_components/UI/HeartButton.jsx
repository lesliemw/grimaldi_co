"use client";
import { useState } from "react";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";

function HeartButton() {
  const [liked, setIsLiked] = useState(false);

  return (
    <button
      className={`flex items-center  rounded-md sm:text-3xl  text-5xl  hover:text-red-400 ${
        liked && "text-red-400"
      } font-bold`}
      onClick={() => setIsLiked(!liked)}
    >
      {liked ? <VscHeartFilled /> : <VscHeart />}
    </button>
  );
}

export default HeartButton;
