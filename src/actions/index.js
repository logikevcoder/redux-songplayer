
// Action creator
export const selectSong = (song) => {
  return {
    type: 'SONG_SELECTED', // type required
    payload: song // optional payload but in this case we will need to specify which song to select
  };
};