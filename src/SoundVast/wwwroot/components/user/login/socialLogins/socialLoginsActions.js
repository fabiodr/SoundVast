export const getSocialLogins = () => dispatch =>
fetch('account/socialLogins', {
  method: 'post',
}).then(response =>
  response.json().then((json) => {
    dispatch({
      type: 'GET_SOCIAL_LOGINS',
      ...json,
    });
  }),
);
