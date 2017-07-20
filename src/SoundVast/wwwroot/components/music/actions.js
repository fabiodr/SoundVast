/* eslint-disable import/prefer-default-export */

export const getMusic = () => dispatch =>
fetch('/music/getMusic').then(response =>
  response.json().then((json) => {
    dispatch({
      type: 'GET_MUSIC',
      musicAudios: json.musicAudios,
    });
  }),
);
