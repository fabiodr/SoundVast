/* eslint-disable import/prefer-default-export */

import notOkError from '../shared/fetch/errorHandling/notOkError/component';
import notOkErrorPopup from '../shared/fetch/errorHandling/notOkError/popup/component';

export const getGenres = () => dispatch =>
  fetch('/genre/getGenres')
    .then(notOkError)
    .then(response => response.json())
    .then((json) => {
      dispatch({
        type: 'GET_GENRES',
        genres: json.genres,
      });
    })
    .catch(notOkErrorPopup(dispatch));
