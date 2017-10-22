export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return {
        ...state,
        genres: action.genres,
      };
    default: return state;
  }
};
