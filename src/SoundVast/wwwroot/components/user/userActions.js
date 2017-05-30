export const getUserDetails = () => dispatch =>
fetch('account/userdetails', {
  method: 'post',
  mode: 'cors',
}).then(response =>
  response.json().then((json) => {
    dispatch({
      type: 'USER_DETAILS',
      ...json,
    });
  }),
);
