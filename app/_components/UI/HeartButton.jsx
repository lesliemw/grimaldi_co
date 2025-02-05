"use client";
import { useState } from "react";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";

function HeartButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`flex items-center rounded-md sm:text-3xl text-xl hover:text-red-400 ${
        liked ? "text-red-400" : ""
      } font-bold`}
      onClick={() => setLiked(!liked)}
      aria-pressed={liked}
      title={liked ? "Remove from favorites" : "Add to favorites"}
    >
      {liked ? <VscHeartFilled /> : <VscHeart />}
    </button>
  );
}

export default HeartButton;
