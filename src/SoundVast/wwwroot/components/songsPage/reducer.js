const defaultState = {
  songs: [],
  hasMore: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_SONGS':
      return {
        ...state,
        songs: state.songs.concat(action.songs),
        hasMore: action.hasMore,
      };
    default: return state;
  }
};
