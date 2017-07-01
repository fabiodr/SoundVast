const defaultState = {
  genres: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_GENRES':
      return {
        ...state,
        genres: action.genres,
      };
    default: return state;
  }
};
