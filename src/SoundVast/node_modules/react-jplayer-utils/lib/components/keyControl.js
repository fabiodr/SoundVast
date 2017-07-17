'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _connectWithId = require('../connectWithId');

var _connectWithId2 = _interopRequireDefault(_connectWithId);

var _keyIgnoredElementNames = require('../keyIgnoredElementNames');

var _keyIgnoredElementNames2 = _interopRequireDefault(_keyIgnoredElementNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var onKeyDown = function onKeyDown(keyEnabled, focused, keyBindings, event) {
  if (_keyIgnoredElementNames2.default.some(function (name) {
    return name.toUpperCase() === event.target.nodeName.toUpperCase();
  }) || !focused || !keyEnabled) {
    return;
  }

  Object.keys(keyBindings).forEach(function (key) {
    var keyBinding = keyBindings[key];

    if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
      event.preventDefault();
      keyBinding.fn();
    }
  });
};

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers,
      jPlaylists = _ref.jPlaylists;
  var id = _ref2.id;
  return {
    keyEnabled: jPlayers[id].keyEnabled,
    focused: jPlayers[id].focused
  };
};

var KeyControl = function (_React$Component) {
  _inherits(KeyControl, _React$Component);

  function KeyControl() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, KeyControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = KeyControl.__proto__ || Object.getPrototypeOf(KeyControl)).call.apply(_ref3, [this].concat(args))), _this), _this.onKeyDown = function (event) {
      return onKeyDown(_this.props.keyEnabled, _this.props.focused, _this.props.keyBindings, event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(KeyControl, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return KeyControl;
}(_react2.default.Component);

KeyControl.propTypes = {
  keyEnabled: _propTypes2.default.bool.isRequired,
  focused: _propTypes2.default.bool.isRequired,
  keyBindings: _propTypes2.default.object.isRequired
};

exports.default = (0, _connectWithId2.default)(mapStateToProps)(KeyControl);