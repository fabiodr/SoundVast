export default (url, opts = {}, onProgress) =>
  new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();

    xhr.open(opts.method || 'get', url);

    Object.keys(opts.headers || {}).forEach((key) => {
      xhr.setRequestHeader(key, opts.headers[key]);
    });

    xhr.onload = e => res(e.target.responseText);
    xhr.onerror = rej;

    if (xhr.upload && onProgress) {
      // event.loaded
      // event.total * 100
      // event.lengthComputable
      xhr.upload.onprogress = onProgress;
    }

    xhr.send(opts.body);
  });
