/* eslint-disable import/prefer-default-export */

export const getSocialLogins = () => dispatch =>
fetch('/account/getSocialLogins').then(response =>
  response.json().then((json) => {
    dispatch({
      type: 'GET_SOCIAL_LOGINS',
      ...json,
    });
  }),
);
