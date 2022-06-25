import { MagnifyingGlass, SpotifyLogo, Spinner } from "phosphor-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import SpotifyWebApi from "spotify-web-api-node";
import { searchTrack } from "../api/Search";
import "../styles/async-typeahead.scss";
import { spotifyApi } from "../api/apiClient";

export const Header = ({ accessToken, setSelectedTrack }) => {
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  const handleSearch = async (query) => {
    setIsLoadingSearch(true);
    const response = await searchTrack(query, spotifyApi);
    setOptions(response);
    setIsLoadingSearch(false);
  };

  return (
    <header className="flex justify-between items-center bg-neutral-dark text-white py-1 md:px-10 px-5 shadow-lg">
      <SpotifyLogo size={42} className="text-primary-regular" />
      <div className="relative w-1/3">
        <AsyncTypeahead
          className="text-black w-full text-xl"
          id="async-search"
          filterBy={() => true}
          labelKey={"name"}
          minLength={3}
          onSearch={handleSearch}
          options={options}
          placeholder={"Digite uma música/artista aqui"}
          onChange={setSelectedTrack}
          renderMenuItemChildren={(option) => (
            <div className="bg-neutral-dark text-white p-2 flex">
              <img
                src={option.album.images[2].url || ""}
                style={{
                  height: "42px",
                  marginRight: "10px",
                  width: "42px",
                }}
              />
              <div>
                <div className="font-bold">
                  {option.name.length > 12
                    ? `${option.name.slice(0, 12)}...`
                    : option.name}
                </div>
                <div className="text-xs">{option.artists[0].name}</div>
              </div>
            </div>
          )}
        />
        <Spinner className="absolute right-1 top-1" />
      </div>
    </header>
  );
};
