/* eslint-disable import/prefer-default-export */

export const getAccountDetails = () => dispatch =>
fetch('/account/getAccountDetails', {
  credentials: 'same-origin',
}).then(response =>
  response.json().then((json) => {
    dispatch({
      type: 'GET_ACCOUNT_DETAILS',
      ...json,
    });
  }),
);
