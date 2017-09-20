import notOkError from '../../../shared/fetch/errorHandling/notOkError/component';
import { showGenericErrorPopup } from '../../../shared/popup/actions';

export const rateSong = (songId, liked) => dispatch =>
  fetch('/song/rateSong', {
    method: 'post',
    body: JSON.stringify({
      songId,
      liked,
    }),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(notOkError)
    .then(() => dispatch({
      type: 'RATE_SONG',
      songId,
    }))
    .catch(error => dispatch(showGenericErrorPopup(error)));
