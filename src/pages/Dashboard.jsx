import { Spinner } from "phosphor-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getFollowedArtists } from "../api/FollowedArtists";
import { getPlaylists } from "../api/Playlists";
import { getRecentTracks } from "../api/RecentTracks";
import { getSavedAlbuns } from "../api/SavedAlbums";
import Card from "../components/Card";
import Carrousel from "../components/Carrousel";
import { Header } from "../components/Header";
import Player from "../components/Player";
import { useAuth } from "../hooks/Auth";

const Dashboard = () => {
  const [urlParams] = useSearchParams();
  const code = urlParams.get("code");
  const { accessToken } = useAuth(code);
  const [selectedTrack, setSelectedTrack] = useState([]);

  const [recentTracks, setRecentTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [savedAlbuns, setSavedAlbuns] = useState([]);
  const [followedArtists, setFollowedAlbuns] = useState([]);

  const [loadingTracks, setLoadingTracks] = useState(false);
  const [loadingPlaylists, setLoadingPlaylists] = useState(false);
  const [loadingAlbuns, setLoadingAlbuns] = useState(false);
  const [loadingArtists, setLoadingArtists] = useState(false);

  useEffect(() => {
    if (!accessToken) return;

    setLoadingTracks(true);
    setLoadingPlaylists(true);
    setLoadingAlbuns(true);
    setLoadingArtists(true);

    const awaitRecentTracks = async () => {
      const res = await getRecentTracks();
      setRecentTracks(res);
      setLoadingTracks(false);
    };

    const awaitPlaylists = async () => {
      const res = await getPlaylists();
      setPlaylists(res);
      setLoadingPlaylists(false);
    };

    const awaitSavedAlbuns = async () => {
      const res = await getSavedAlbuns();
      setSavedAlbuns(res);
      setLoadingAlbuns(false);
    };

    const awaitFollowedArtists = async () => {
      const res = await getFollowedArtists();
      setFollowedAlbuns(res);
      setLoadingArtists(false);
    };

    awaitRecentTracks();
    awaitPlaylists();
    awaitSavedAlbuns();
    awaitFollowedArtists();
  }, [accessToken]);

  return (
    <div>
      <Header accessToken={accessToken} setSelectedTrack={setSelectedTrack} />
      <main className="bg-neutral-800 p-5 md:p-10">
        <div className="mb-10">
          <h2 className="text-white text-3xl font-bold mb-5">
            Recentemente Tocados
          </h2>
          <Carrousel>
            {!loadingTracks ? (
              recentTracks.length > 0 ? (
                recentTracks.map((t) => (
                  <Card
                    artist={t.track.artists[0].name}
                    img={t.track.album.images[1].url}
                    title={t.track.name}
                  />
                ))
              ) : (
                <p className="text-lg text-white">
                  Parece que você não ouviu nenhuma musica recentemente, tente
                  ouvir algo para aparecer aqui!
                </p>
              )
            ) : (
              <Spinner />
            )}
          </Carrousel>
        </div>
        <div className="mb-10">
          <h2 className="text-white text-3xl font-bold mb-5">Albuns Salvos</h2>
          <Carrousel>
            {!loadingAlbuns ? (
              savedAlbuns.length > 0 ? (
                savedAlbuns.map((a) => (
                  <Card
                    artist={a.album.artists[0].name}
                    img={a.album.images[1].url}
                    title={a.album.name}
                  />
                ))
              ) : (
                <p className="text-lg text-white">
                  Parece que você ainda não tem nenhum Album salvo... Salve
                  algum album para que ele possa aparecer aqui!
                </p>
              )
            ) : (
              <Spinner />
            )}
          </Carrousel>
        </div>
        <div className="mb-10">
          <h2 className="text-white text-3xl font-bold mb-5">
            Artistas Seguidos
          </h2>
          <Carrousel>
            {!loadingArtists ? (
              followedArtists.length > 0 ? (
                followedArtists.map((a) => (
                  <Card
                    artist={a.genres[0]}
                    img={a.images[1].url}
                    title={a.name}
                  />
                ))
              ) : (
                <p>
                  Parece que você ainda não segue nenhum artista, siga algum
                  para que ele possa aparecer aqui!
                </p>
              )
            ) : (
              <Spinner />
            )}
          </Carrousel>
        </div>
        <div className="mb-10">
          <h2 className="text-white text-3xl font-bold mb-5">
            Minhas Playlists
          </h2>
          <Carrousel>
            {!loadingPlaylists ? (
              playlists.length > 0 ? (
                playlists.map((p) => (
                  <Card artist={p.type} img={p.images[0].url} title={p.name} />
                ))
              ) : (
                <p>
                  Parece que você ainda não criou nenhuma playlist, crie uma
                  para que ela possa aparecer aqui!
                </p>
              )
            ) : (
              <Spinner />
            )}
          </Carrousel>
        </div>
      </main>
      <Player
        accessToken={accessToken}
        trackUri={selectedTrack.length > 0 && selectedTrack[0].uri}
      />
    </div>
  );
};

export default Dashboard;
