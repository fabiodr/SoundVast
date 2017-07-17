/* eslint-disable import/prefer-default-export */

export const getGenres = () => dispatch =>
fetch('/genre/getGenres').then(response =>
  response.json().then((json) => {
    dispatch({
      type: 'GET_GENRES',
      ...json,
    });
  }),
);
