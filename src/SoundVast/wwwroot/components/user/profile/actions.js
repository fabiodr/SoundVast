/* eslint-disable import/prefer-default-export */

import notOkError from '../../shared/fetch/notOkError/notOkError';
import notOkErrorPopup from '../../shared/fetch/notOkError/popup/popup';

export const getUserUploads = () => dispatch =>
  fetch('/profile/getUserUploads', {
    credentials: 'same-origin',
  }).then(notOkError)
    .then(response => response.json())
    .then((json) => {
      dispatch({
        type: 'SET_USER_UPLOADS',
        userAudios: json.userAudios,
      });
    })
    .catch(notOkErrorPopup(dispatch));
