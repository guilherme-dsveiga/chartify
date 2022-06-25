import { spotifyApi } from "./apiClient";

export const getPlaylists = async () => {
  const res = await spotifyApi.getUserPlaylists();
  return res.body.items;
};
