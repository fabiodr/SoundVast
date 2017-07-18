/* eslint-disable import/prefer-default-export */

export const getUserUploads = () => dispatch =>
  fetch('/profile/getUserUploads', {
    credentials: 'same-origin',
  }).then(response =>
    response.json().then((json) => {
      dispatch({
        type: 'SET_USER_UPLOADS',
        userAudios: json.userAudios,
      });
    }));
