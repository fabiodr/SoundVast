/* eslint-disable no-console */

import { showTextPopup } from '../../../../popup/actions';

export default dispatch => (error) => {
  console.error(error);

  if (error.name === 'SubmissionError') {
    throw error;
  }

  return dispatch(showTextPopup('An error occured. Please try refreshing the page.'));
};
