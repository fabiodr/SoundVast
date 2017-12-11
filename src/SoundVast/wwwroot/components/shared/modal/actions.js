export const showModal = (id, variables) => ({
  type: 'SHOW_MODAL',
  id,
  variables,
});

export const hideModal = () => ({
  type: 'HIDE_MODAL',
});
