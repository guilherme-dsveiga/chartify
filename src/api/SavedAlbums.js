import { spotifyApi } from "./apiClient";

export const getSavedAlbuns = async () => {
  const res = await spotifyApi.getMySavedAlbums({ limit: 20 });
  console.log(res.body.items);
  return res.body.items;
};
