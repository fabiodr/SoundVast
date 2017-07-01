const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_TEXT_POPUP':
      return {
        ...state,
        currentPopup: action.id,
        text: action.text,
      };
    case 'HIDE_POPUP':
      return {
        ...state,
        currentPopup: null,
      };
    default: return state;
  }
};

export default reducer;
