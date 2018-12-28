import { combineReducers } from "redux";

// return static list of songs
const songsReducer = () => {
  return [
    {title: 'No Scrubs', duraction: '4:05'},
    {title: 'Macarena', duraction: '1:07'},
    {title: 'Waterfall', duraction: '5:25'},
    {title: 'I want it that way', duraction: '3:49'},
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