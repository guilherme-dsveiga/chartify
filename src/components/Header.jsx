import { MagnifyingGlass, SpotifyLogo } from "phosphor-react";
import React, { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {};

  return (
    <header className="flex justify-between items-center bg-neutral-dark text-white py-1 md:px-10 px-5 shadow-lg">
      <SpotifyLogo size={42} className="text-primary-regular" />
      <div className="relative md:w-1/4 w-2/4">
        <input
          type={"text"}
          className=" py-1 pl-2 pr-[34px] text-white border-b-2 border-primary-regular bg-transparent w-full text-xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(k) =>
            (k.code === "Enter" || k.code === "NumpadEnter") &
              (search.length > 0) && handleSearch()
          }
        />
        <MagnifyingGlass
          size={24}
          className="absolute right-2 top-1 cursor-pointer text-primary-regular font-bold"
          onClick={handleSearch}
        />
      </div>
    </header>
  );
};
