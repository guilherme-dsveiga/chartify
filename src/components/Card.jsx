import React from "react";
import DefaultAlbumCover from "../assets/default-album-cover.svg";

const Card = ({ title, img, artist }) => {
  return (
    <div className="bg-neutral-800 rounded p-2 text-white">
      <img
        className="w-full min-w-[150px]"
        src={img ? img : DefaultAlbumCover}
      />
      <h5 className="font-bold">{title}</h5>
      <p className="text-sm">{artist}</p>
    </div>
  );
};

export default Card;
