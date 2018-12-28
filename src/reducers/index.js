import { combineReducers } from "redux";

// return static list of songs
const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Macarena', duration: '1:07'},
    {title: 'Waterfall', duration: '5:25'},
    {title: 'I want it that way', duration: '3:49'},
  ];
};

// return specific song
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})