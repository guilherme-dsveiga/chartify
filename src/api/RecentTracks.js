import { spotifyApi } from "./apiClient";

export const getRecentTracks = async () => {
  const res = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 });
  return res.body.items;
};
