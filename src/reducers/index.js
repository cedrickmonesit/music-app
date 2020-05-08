import { combineReducers } from "redux";

//user
import userPlaylistsReducer from "./user/userPlaylistsReducer";

//tracks
import playlistTracksReducer from "./tracks/playlistTracksReducer";

//token
import tokenStatus from "./tokenStatus/tokenStatusReducer";

//currentmusicindex
import setCurrentMusicIndex from "./currentMusicIndex/currentMusicIndexReducer";

//search results
import searchResultsReducer from "./searchResults.js/searchResultsReducer";

//new releases
import newReleasesReducer from "./newReleases/newReleasesReducer";

//featured playlists
import featuredPlaylistsReducer from "./featuredPlaylists/featuredPlaylistsReducer";

//album
import albumReducer from "./album/albumTracksReducer";

//take reducer put it inside to combineReducers
export default combineReducers({
  userPlaylists: userPlaylistsReducer,
  playlistsTracks: playlistTracksReducer,
  tokenStatus: tokenStatus,
  currentMusicIndex: setCurrentMusicIndex,
  searchResults: searchResultsReducer,
  newReleasesAlbums: newReleasesReducer,
  featuredPlaylists: featuredPlaylistsReducer,
  albumTracks: albumReducer,
});
