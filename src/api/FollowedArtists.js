import { spotifyApi } from "./apiClient";

export const getFollowedArtists = async () => {
  const res = await spotifyApi.getFollowedArtists({ limit: 20 });
  console.log(res.body.artists.items);
  return res.body.artists.items;
};
