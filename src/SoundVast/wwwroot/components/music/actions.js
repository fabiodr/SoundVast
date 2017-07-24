/* eslint-disable import/prefer-default-export */

import notOkError from '../shared/fetch/errorHandling/notOkError/notOkError';
import notOkErrorPopup from '../shared/fetch/errorHandling/notOkError/notOkErrorPopup';

const amount = 30;
let current = 0;

export const fetchMusic = () => (dispatch) => {
  const result = fetch('/music/fetchMusic', {
    method: 'post',
    body: JSON.stringify({
      current,
      amount,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(notOkError)
    .then(response => response.json())
    .then(json => dispatch({
      type: 'FETCH_MUSIC',
      musicAudios: json.musicAudios,
      hasMore: json.hasMore,
    }))
    .catch(notOkErrorPopup(dispatch));

  current += 30;

  return result;
};
