'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = require('recompose');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (component) {
  return (0, _recompose.compose)((0, _recompose.withContext)({
    index: _propTypes2.default.number
  }, function (_ref) {
    var index = _ref.index;
    return { index: index };
  })(component));
};