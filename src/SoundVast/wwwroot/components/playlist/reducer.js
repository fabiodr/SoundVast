export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PLAYLIST': {
      return {
        ...state,
        currentPlaylistId: action.currentPlaylistId,
      };
    }
    default: return state;
  }
};
