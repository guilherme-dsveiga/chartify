import { SpotifyLogo } from "phosphor-react";
import { AUTH_URL } from "../api/Login";
import React from "react";

const SpotifyLogin = () => {
  return (
    <div className="rounded-lg shadow-lg p-8 bg-neutral-900 text-white">
      <h2 className="text-center font-bold text-4xl mb-10">Bem Vindo</h2>
      <a
        className="py-3 px-5 bg-neutral-dark rounded text-white flex items-center shadow"
        href={AUTH_URL}
      >
        <SpotifyLogo size={42} className="text-primary-regular" />
        <p className="text-xl ml-2 font-semibold">Logar com Spotify!</p>
      </a>
    </div>
  );
};

export default SpotifyLogin;
