const defaultState = {
  musicAudios: [],
  hasMore: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_MUSIC':
      return {
        ...state,
        musicAudios: state.musicAudios.concat(action.musicAudios),
        hasMore: action.hasMore,
      };
    default: return state;
  }
};
