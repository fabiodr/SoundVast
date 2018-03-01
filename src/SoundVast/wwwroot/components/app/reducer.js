const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_PLACEHOLDER_IMAGE': {
      const imagePlaceholderUrl = action.imagePlaceholderUrl;

      return {
        ...state,
        imagePlaceholderUrl,
      };
    }
    case 'SET_USER': {
      return {
        ...state,
        user: action.user || {},
      };
    }
    default: return state;
  }
};

export default reducer;
