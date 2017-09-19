import notOkError from '../../../shared/fetch/errorHandling/notOkError/component';
import notOkErrorPopup from '../../../shared/fetch/errorHandling/notOkError/popup/component';

export const like = songId => dispatch =>
  fetch('/song/like', {
    method: 'post',
    body: JSON.stringify({
      songId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(notOkError)
    .then(response => response.json())
    .then(json => dispatch({
      type: 'LIKE_SONG',
      songId,
      likes: json.likes,
    }))
    .catch(notOkErrorPopup(dispatch));
