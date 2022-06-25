import { spotifyApi } from "./apiClient";

export const searchTrack = (query) => {
  return spotifyApi.searchTracks(query).then((res) => res.body.tracks.items);
};
