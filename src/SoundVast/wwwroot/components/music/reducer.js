const defaultState = {
  musicAudios: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_MUSIC':
      return {
        ...state,
        musicAudios: action.musicAudios,
      };
    default: return state;
  }
};
