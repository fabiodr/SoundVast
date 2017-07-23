/* eslint-disable import/prefer-default-export */

import notOkError from '../shared/fetch/errorHandling/notOkError/notOkError';
import notOkErrorPopup from '../shared/fetch/errorHandling/notOkError/notOkErrorPopup';

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
