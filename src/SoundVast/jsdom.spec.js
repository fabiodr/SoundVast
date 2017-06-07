import jsdom from 'jsdom';
import 'isomorphic-fetch';
import 'url-search-params-polyfill';
import hook from 'css-modules-require-hook';

hook({
  extensions: ['.less'],
  generateScopedName: '[local]',
});

const window = new jsdom.JSDOM().window;

Object.keys(window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = window[property];
  }
});
