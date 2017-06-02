export const generateAntiForgeryToken = () => dispatch =>
fetch('account/generateAntiForgeryToken', {
  method: 'post',
}).then(response =>
  response.json().then((json) => {
    document.cookie = `.AspNetCore.Antiforgery.t-N2J2NeFvs=${json.cookieToken}`;
    dispatch({
      type: 'GENERATE_ANTI_FORGERY_TOKEN',
      ...json,
    });
  }),
);
