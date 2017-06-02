export const generateAntiForgeryToken = () => dispatch =>
fetch('account/generateAntiForgeryToken', {
  method: 'post',
  credentials: 'same-origin',
}).then(response =>
  response.json().then((json) => {
    dispatch({
      type: 'GENERATE_ANTI_FORGERY_TOKEN',
      ...json,
    });
  }),
);
