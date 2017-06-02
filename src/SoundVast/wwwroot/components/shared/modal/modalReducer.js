export default (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        currentModal: action.id,
      };
    default: return state;
  }
};
