import { actions } from 'react-jplaylist';

import notOkError from '../shared/fetch/errorHandling/notOkError/component';
import notOkErrorPopup from '../shared/fetch/errorHandling/notOkError/popup/component';

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
    .then((json) => {
      dispatch({
        type: 'FETCH_SONGS',
        songs: json.songs,
        hasMore: json.hasMore,
      });
      const playlist = json.songs.map(song => ({
        id: song.id,
        title: song.name,
        artist: song.artist,
        sources: {
          mp3: `${window.location.origin}/song/stream?id=${song.id}`,
        },
        poster: song.coverImageUrl,
        free: song.free,
      }));
      dispatch(actions.setPlaylist('FooterPlaylist', playlist));
    })
    .catch(notOkErrorPopup(dispatch));

  current += 30;

  return result;
};
