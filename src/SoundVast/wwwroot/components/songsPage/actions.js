import notOkError from '../shared/fetch/errorHandling/notOkError/component';
import notOkErrorPopup from '../shared/fetch/errorHandling/notOkError/popup/component';

export const fetchSong = id => (dispatch) => {
  const result = fetch('/song/fetchSong', {
    method: 'post',
    body: JSON.stringify({
      id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(notOkError)
    .then(response => response.json())
    .then(json => dispatch({
      type: 'FETCH_SONG',
      currentSong: json.song,
    }))
    .catch(notOkErrorPopup(dispatch));

  return result;
};

const amount = 30;
let current = 0;

export const fetchSongs = () => (dispatch) => {
  const result = fetch('/song/fetchSongs', {
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
      type: 'FETCH_SONGS',
      songs: json.songs,
      hasMore: json.hasMore,
    }))
    .catch(notOkErrorPopup(dispatch));

  current += 30;

  return result;
};