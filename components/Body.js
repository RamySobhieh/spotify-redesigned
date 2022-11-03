import Search from "./Search";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Poster from "./Poster";
import Track from "./Track";

function Body({ spotifyApi, chooseTrack }) {
  const { data: session } = useSession();
  const accessToken = session.accessToken;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;

    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
            popularity: track.popularity,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getNewReleases().then((res) => {
      setNewReleases(
        res.body.albums.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);

  return (
    <section className="bg-black ml-20 md:ml-24 py-4 space-y-0 md:space-y-8 w-[75%] flex-grow md:mr-2.5">
      {/* Searcbar */}
      <Search search={search} setSearch={setSearch} />

      {/* Poster Carousel */}
      <div className="relative overflow-hidden mr-4">
        <div
          id="carousel"
          className="flex flex-row h-[300px] md:h-[400px] overflow-x-scroll space-x-8 scrollbar-hide items-center"
        >
          <div className="absolute right-0 h-full w-[50px] bg-gradient-to-r from-transparent to-black z-10"></div>
          <div className="absolute left-[-32px] h-full w-[50px] bg-gradient-to-l from-transparent to-black z-10"></div>
          {searchResults.length === 0
            ? newReleases
                .slice(0, 8)
                .map((track) => (
                  <Poster
                    key={track.id}
                    track={track}
                    chooseTrack={chooseTrack}
                  />
                ))
            : searchResults
                .slice(0, 8)
                .map((track) => (
                  <Poster
                    key={track.id}
                    track={track}
                    chooseTrack={chooseTrack}
                  />
                ))}
        </div>
      </div>

      <div className="flex gap-x-8 md:min-w-full md:relative ml-0">
        {/* Genres */}
        <div className="hidden xl:inline max-w-[270px]">
          <h2 className="text-white font-bold mb-3">Genres</h2>
          <div className="flex gap-x-2 gap-y-2.5 flex-wrap mb-3">
            <div className="genre">Classic</div>
            <div className="genre">House</div>
            <div className="genre">Minimal</div>
            <div className="genre">Hip-hop</div>
            <div className="genre">Electronic</div>
            <div className="genre">Chillout</div>
            <div className="genre">Blues</div>
            <div className="genre">Country</div>
            <div className="genre">Techno</div>
          </div>
          <button className="text-[#CECECE] bg-[#1A1A1A] text-[13px] py-3.5 px-4 rounded-2xl w-full font-bold bg-opacity-80 hover:bg-opacity-100 transition ease-out">
            All Genres
          </button>
        </div>

        {/* Tracks */}
        <div className="w-[80vw] md:w-full pr-11 ml-1 md:ml-0">
          <h2 className="text-white font-bold mb-3">
            {searchResults.length === 0 ? "New Releases" : "Tracks"}
          </h2>
          <div className="space-y-3 border-2 border-[#262626] rounded-2xl md:p-3 bg-[#0D0D0D] overflow-y-scroll h-[230px] md:h-96 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500 w-full md:w-[830px] mr-1 md:mr-0">
            {searchResults.length === 0
              ? newReleases
                  .slice(8, newReleases.length)
                  .map((track) => (
                    <Track
                      key={track.id}
                      track={track}
                      chooseTrack={chooseTrack}
                    />
                  ))
              : searchResults
                  .slice(8, searchResults.length)
                  .map((track) => (
                    <Track
                      key={track.id}
                      track={track}
                      chooseTrack={chooseTrack}
                    />
                  ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
