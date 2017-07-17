'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = function initialState(connectedJPlayers, defaultValues, optionsName) {
  var jPlayers = {};
  var newConnectedJPlayers = connectedJPlayers;

  if (!Array.isArray(connectedJPlayers)) {
    newConnectedJPlayers = [newConnectedJPlayers];
  }

  newConnectedJPlayers.forEach(function (connectedJPlayer) {
    jPlayers[connectedJPlayer.options.id] = (0, _lodash2.default)({}, _extends({}, defaultValues), connectedJPlayer[optionsName]);
  });

  return jPlayers;
};

exports.default = initialState;