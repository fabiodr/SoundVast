/* eslint-disable no-console */

import { showPopup } from '../../../popup/actions';

/** @deprecated  in favour of dispatching showErrorPopup directly */
export default dispatch => (error) => {
  console.error(error);

  if (error.name === 'SubmissionError') {
    throw error;
  }

  return dispatch(showPopup('An error occured. Please try refreshing the page.'));
};
