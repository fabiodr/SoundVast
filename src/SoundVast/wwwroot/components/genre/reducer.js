const defaultState = {
  musicGenres: [],
  liveStreamGenres: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_MUSIC_GENRES':
      return {
        ...state,
        musicGenres: action.musicGenres,
      };
    case 'GET_LIVE_STREAM_GENRES':
      return {
        ...state,
        liveStreamGenres: action.liveStreamGenres,
      };
    default: return state;
  }
};
