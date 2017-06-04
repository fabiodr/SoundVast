export const getSocialLogins = () => dispatch =>
fetch('account/socialLogins').then(response =>
  response.json().then((json) => {
    dispatch({
      type: 'GET_SOCIAL_LOGINS',
      ...json,
    });
  }),
);
