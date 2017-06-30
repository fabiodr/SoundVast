const defaultState = {
  genres: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_GENRES':
      return {
        genres: action.genres,
      };
    default: return state;
  }
};
