/* eslint-disable no-console */

import { showTextPopup } from '../../../../popup/actions';

/** @deprecated  in favour of dispatching showErrorPopup directly */
export default dispatch => (error) => {
  console.error(error);

  if (error.name === 'SubmissionError') {
    throw error;
  }

  return dispatch(showTextPopup('An error occured. Please try refreshing the page.'));
};
