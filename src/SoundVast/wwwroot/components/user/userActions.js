/* eslint-disable import/prefer-default-export */

export const getUserDetails = () => dispatch =>
fetch('/account/getUserDetails', {
  credentials: 'same-origin',
}).then(response =>
  response.json().then((json) => {
    dispatch({
      type: 'GET_USER_DETAILS',
      ...json,
    });
  }),
);
