import jsdom from 'jsdom';
import 'isomorphic-fetch';

const window = new jsdom.JSDOM().window;

Object.keys(window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = window[property];
  }
});
