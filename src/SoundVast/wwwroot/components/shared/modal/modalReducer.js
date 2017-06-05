export default (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        currentModal: action.id,
      };
    case 'HIDE_MODAL':
      return {
        currentModal: null,
      };
    default: return state;
  }
};
