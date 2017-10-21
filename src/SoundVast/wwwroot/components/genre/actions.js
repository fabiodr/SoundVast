/* eslint-disable import/prefer-default-export */

import notOkError from '../shared/fetch/notOkError/notOkError';
import notOkErrorPopup from '../shared/fetch/notOkError/popup/popup';

export const getMusicGenres = () => dispatch =>
  fetch('/genre/getMusicGenres')
    .then(notOkError)
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: 'GET_MUSIC_GENRES',
        musicGenres: json.musicGenres,
      }))
    .catch(notOkErrorPopup(dispatch));

export const getLiveStreamGenres = () => dispatch =>
  fetch('/genre/getLiveStreamGenres')
    .then(notOkError)
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: 'GET_LIVE_STREAM_GENRES',
        liveStreamGenres: json.liveStreamGenres,
      }))
    .catch(notOkErrorPopup(dispatch));

