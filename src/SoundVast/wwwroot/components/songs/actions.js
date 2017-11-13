import notOkError from '../shared/fetch/notOkError/notOkError';
import { showGenericErrorPopup } from '../shared/popup/actions';

export const rateSong = (id, liked) => dispatch =>
  fetch('/rating/rateAudio', {
    method: 'post',
    body: JSON.stringify({
      audioId: id,
      liked,
    }),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(notOkError)
    .then(response => response.json())
    .then(json => dispatch({
      type: 'RATE_SONG',
      rating: json.rating,
    }))
    .catch(error => dispatch(showGenericErrorPopup(error)));
