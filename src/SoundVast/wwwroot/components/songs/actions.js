import notOkError from '../shared/fetch/notOkError/notOkError';
import { showGenericErrorPopup } from '../shared/popup/actions';

const amount = 30;
let current = 0;

export const fetchNextSongs = () => (dispatch) => {
  const result = fetch(`/song/getSongs?current=${current}&amount=${amount}`)
    .then(notOkError)
    .then(response => response.json())
    .then(json => dispatch({
      type: 'FETCH_NEXT_SONGS',
      songs: json.songs,
      hasMore: json.hasMore,
    }))
    .catch(error => dispatch(showGenericErrorPopup(error)));

  current += 30;

  return result;
};

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
