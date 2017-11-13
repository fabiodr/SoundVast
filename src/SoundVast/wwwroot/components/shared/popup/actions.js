export const showTextPopup = text => ({
  type: 'SHOW_TEXT_POPUP',
  id: 'textPopup',
  text,
});

export const hidePopup = () => ({
  type: 'HIDE_POPUP',
});

export const showGenericErrorPopup = (error) => {
  // eslint-disable-next-line no-console
  console.error(error);

  return showTextPopup('An error has occurred. Please try refreshing the page.');
};
