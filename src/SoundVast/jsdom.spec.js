import jsdom from 'jsdom';
import 'isomorphic-fetch';
import 'url-search-params-polyfill';
import hook from 'css-modules-require-hook';
import { injectReactEmailAttributes } from 'react-html-email';

injectReactEmailAttributes();

hook({
  extensions: ['.less'],
  generateScopedName: '[local]',
});

const window = new jsdom.JSDOM().window;

global.FormData = window.FormData;

Object.keys(window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = window[property];
  }
});
