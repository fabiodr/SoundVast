import notOkError from './notOkError/notOkError';
import validationError from './validationError/validationError';

const getResponse = (serverResponse, response = 'json') => {
  if (response === 'json') {
    return serverResponse.json();
  } else if (response === 'blob') {
    return serverResponse.blob();
  } else if (response === 'response') {
    return serverResponse;
  }
  return Promise.reject('invalid response supplied');
};

const handleError = error => console.error(error); // eslint-disable-line no-console

window.fetch.postForm = (url, options = {}) => (params) => {
  const formData = new FormData();

  Object.keys(params).forEach(key => formData.set(key, params[key]));

  return fetch(url, {
    method: 'post',
    body: formData,
  }).then(validationError)
    .then(notOkError)
    .then(serverResponse => getResponse(serverResponse, options.response))
    .catch(handleError);
};

window.fetch.get = (url, options = {}) =>
  fetch(url)
    .then(notOkError)
    .then(serverResponse => getResponse(serverResponse, options.response))
    .catch(handleError);
