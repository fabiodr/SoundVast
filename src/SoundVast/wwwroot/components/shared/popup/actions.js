export const showGenericErrorPopup = (error) => {
  // eslint-disable-next-line no-console
  console.error(error);

  return {
    type: 'SHOW_TEXT_POPUP',
    id: 'textPopup',
    text: 'An error occured. Please try refreshing the page.',
  };
};

export const showTextPopup = text => ({
  type: 'SHOW_TEXT_POPUP',
  id: 'textPopup',
  text,
});

export const hidePopup = () => ({
  type: 'HIDE_POPUP',
});
