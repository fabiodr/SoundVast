/**
 * Passing null/undefined will hide the modal
 *@param {id} id of the modal to show
*/
export const showModal = id => ({
  type: 'SHOW_MODAL',
  id,
});
