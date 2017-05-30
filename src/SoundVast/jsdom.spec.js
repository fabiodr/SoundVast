import jsdom from 'jsdom';

const window = new jsdom.JSDOM('', {
  url: 'https://localhost:8070/',
}).window;

Object.keys(window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = window[property];
  }
});

var newBase = document.createElement("base");
newBase.setAttribute("href", document.location.hostname);
document.getElementsByTagName("head")[0].appendChild(newBase);

