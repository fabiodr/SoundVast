export default (url, opts = {}, uploadEvents) =>
  new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();

    xhr.open(opts.method || 'get', url, true);

    Object.keys(opts.headers || {}).forEach((key) => {
      xhr.setRequestHeader(key, opts.headers[key]);
    });

    xhr.onload = e => res(e.target.responseText);
    xhr.onerror = rej;

    if (xhr.upload) {
      Object.keys(uploadEvents).forEach((key) => {
        xhr.upload.addEventListener(key, uploadEvents[key]);
      });
    }

    xhr.send(opts.body);
  });
