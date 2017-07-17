'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = mergeValidity;

var _isPlainObject = require('./is-plain-object');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeValidity(fieldValidity, actionValidity) {
  if (!(0, _isPlainObject2.default)(fieldValidity) || !(0, _isPlainObject2.default)(actionValidity)) {
    // can't merge string/boolean validity with keyed validity
    return actionValidity;
  }

  return (0, _merge2.default)(_extends({}, fieldValidity), actionValidity);
}