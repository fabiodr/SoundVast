"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (currentElement, className) {
  var element = currentElement;

  while (element.parentNode) {
    element = element.parentNode;

    if (element.className !== undefined && element.className.includes(className)) {
      return element;
    }
  }
  return false;
};