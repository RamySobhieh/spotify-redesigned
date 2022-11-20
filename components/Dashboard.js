import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
// import Player from "./Player";
import { playingTrackState } from "../atoms/playerAtom";
import { useRecoilState } from "recoil";
import Body from "./Body";
import Right from "./Right";
import SpotifyWebApi from "spotify-web-api-node";
import Player from "./Player";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
});

function Dashboard() {
  const { data: session } = useSession();
  const { accessToken } = session;

  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <main className="h-[800px] lg:h-full flex bg-black lg:pb-24">
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <div className="hidden lg:block">
        <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      </div>

      {showPlayer && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Player accessToken={accessToken} trackUri={playingTrack.uri} />
        </div>
      )}
    </main>
  );
}

export default Dashboard;
