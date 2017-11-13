const defaultState = {
  hasMore: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'RATE_SONG': {
      const ratings = { ...state.ratings };

      ratings[action.rating.id] = action.rating;

      return {
        ...state,
        ratings,
      };
    }
    default: return state;
  }
};
