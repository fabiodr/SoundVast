import notOkError from './notOkError/notOkError';
import validationError from './validationError/validationError';
import fetchProgress from './fetchProgress';

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

const handleError = error => Promise.reject(error);

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

window.fetch.post = (url, options = {}) => params =>
  fetch(url, {
    method: 'post',
    body: JSON.stringify({
      ...params,
    }),
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'same-origin',
  }).then(notOkError)
    .then(serverResponse => getResponse(serverResponse, options.response))
    .catch(handleError);

// Remove this when fetch supports progress
window.fetch.fetchProgress = (url, uploadEvents = {}) => (params) => {
  const formData = new FormData();

  Object.keys(params).forEach(key => formData.set(key, params[key]));

  fetchProgress(url, {
    method: 'post',
    body: formData,
  }, {}, uploadEvents);
};
