/* eslint-disable import/prefer-default-export */

export const getUserDetails = () => dispatch =>
fetch('/account/userDetails').then(response =>
  response.json().then((json) => {
    dispatch({
      type: 'GET_USER_DETAILS',
      ...json,
    });
  }),
);
