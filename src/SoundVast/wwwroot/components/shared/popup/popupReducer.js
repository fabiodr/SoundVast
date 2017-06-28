const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_TEXT_POPUP':
      return {
        currentPopup: action.id,
        text: action.text,
      };
    case 'HIDE_POPUP':
      return {
        currentPopup: null,
      };
    default: return state;
  }
};

export default reducer;
