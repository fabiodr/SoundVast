export default (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_POPUP':
      return {
        currentPopup: action.id,
      };
    case 'HIDE_POPUP':
      return {
        currentPopup: null,
      };
    default: return state;
  }
};
