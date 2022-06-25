import {
  Pause,
  Play,
  SpeakerHigh,
  SpeakerLow,
  SpeakerNone,
} from "phosphor-react";
import React, { useEffect, useState } from "react";
import "../styles/player.scss";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = ({ accessToken, trackUri }) => {
  if (!accessToken) return;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      uris={trackUri ? [trackUri] : []}
      autoPlay={true}
      initialVolume={0.25}
      styles={{
        activeColor: "#d64013",
        bgColor: "#0f0f0f",
        color: "#d64013",
        trackArtistColor: "#e3e3e3",
        trackNameColor: "#fff",
      }}
    />
  );
};

export default Player;
