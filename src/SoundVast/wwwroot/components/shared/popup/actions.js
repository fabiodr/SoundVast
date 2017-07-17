export const showTextPopup = text => ({
  type: 'SHOW_TEXT_POPUP',
  id: 'textPopup',
  text,
});

export const hidePopup = () => ({
  type: 'HIDE_POPUP',
});
