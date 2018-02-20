webpackJsonp([1],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _notOkError = __webpack_require__(234);

var _notOkError2 = _interopRequireDefault(_notOkError);

var _validationError = __webpack_require__(235);

var _validationError2 = _interopRequireDefault(_validationError);

var _fetchProgress = __webpack_require__(233);

var _fetchProgress2 = _interopRequireDefault(_fetchProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getResponse = function getResponse(serverResponse) {
  var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';

  if (response === 'json') {
    return serverResponse.json();
  } else if (response === 'blob') {
    return serverResponse.blob();
  } else if (response === 'response') {
    return serverResponse;
  }
  return Promise.reject('invalid response supplied');
};

var handleError = function handleError(error) {
  return Promise.reject(error);
};

window.fetch.postForm = function (url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (params) {
    var formData = new FormData();

    Object.keys(params).forEach(function (key) {
      return formData.set(key, params[key]);
    });

    return fetch(url, {
      method: 'post',
      body: formData
    }).then(_validationError2.default).then(_notOkError2.default).then(function (serverResponse) {
      return getResponse(serverResponse, options.response);
    }).catch(handleError);
  };
};

window.fetch.get = function (url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(url).then(_notOkError2.default).then(function (serverResponse) {
    return getResponse(serverResponse, options.response);
  }).catch(handleError);
};

window.fetch.post = function (url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (params) {
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(_extends({}, params)),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(_notOkError2.default).then(function (serverResponse) {
      return getResponse(serverResponse, options.response);
    }).catch(handleError);
  };
};

// Remove this when fetch supports progress
window.fetch.fetchProgress = function (url) {
  var uploadEvents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (params) {
    var formData = new FormData();

    Object.keys(params).forEach(function (key) {
      return formData.set(key, params[key]);
    });

    (0, _fetchProgress2.default)(url, {
      method: 'post',
      body: formData
    }, {}, uploadEvents);
  };
};

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var events = arguments[2];
  var uploadEvents = arguments[3];
  return new Promise(function (res, rej) {
    var xhr = new XMLHttpRequest();

    xhr.open(opts.method || 'get', url, true);

    Object.keys(opts.headers || {}).forEach(function (key) {
      xhr.setRequestHeader(key, opts.headers[key]);
    });

    xhr.onload = function (e) {
      return res(e.target.responseText);
    };
    xhr.onerror = rej;

    Object.keys(events).forEach(function (key) {
      xhr.addEventListener(key, events[key]);
    });

    if (xhr.upload) {
      Object.keys(uploadEvents).forEach(function (key) {
        xhr.upload.addEventListener(key, uploadEvents[key]);
      });
    }

    xhr.send(opts.body);
  });
};

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (response) {
  if (!response.ok) {
    return Promise.reject(response);
  }
  return response;
};

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(13);

exports.default = function (response) {
  if (response.status === 400) {
    return response.json().then(function (modelErrors) {
      throw new _reduxForm.SubmissionError(modelErrors);
    });
  }

  return response;
};

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./GraphQLLanguageService": 176,
	"./GraphQLLanguageService.js": 176,
	"./GraphQLLanguageService.js.flow": 1206,
	"./autocompleteUtils": 131,
	"./autocompleteUtils.js": 131,
	"./autocompleteUtils.js.flow": 1207,
	"./getAutocompleteSuggestions": 132,
	"./getAutocompleteSuggestions.js": 132,
	"./getAutocompleteSuggestions.js.flow": 1208,
	"./getDefinition": 133,
	"./getDefinition.js": 133,
	"./getDefinition.js.flow": 1209,
	"./getDiagnostics": 134,
	"./getDiagnostics.js": 134,
	"./getDiagnostics.js.flow": 1210,
	"./getOutline": 177,
	"./getOutline.js": 177,
	"./getOutline.js.flow": 1211,
	"./index": 178,
	"./index.js": 178,
	"./index.js.flow": 1212
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 513;

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _graphiql = __webpack_require__(645);

var _graphiql2 = _interopRequireDefault(_graphiql);

__webpack_require__(644);

__webpack_require__(114);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var username = 'TestUser';
var password = 'Password';

var loginTestAccount = function loginTestAccount() {
  return fetch.post('/account/login', { response: 'response' })({
    username: username,
    password: password
  });
};

var registerTestAccount = function registerTestAccount() {
  return fetch.post('/account/register')({
    username: username,
    email: 'test@gmail.com',
    password: password,
    confirmPassword: 'Password'
  }).catch(function (response) {
    if (response.status === 400) {
      loginTestAccount();
    }
  });
};

registerTestAccount();

var graphQLFetcher = function graphQLFetcher(graphQLParams) {
  return fetch.post('/graphql')(_extends({}, graphQLParams, {
    variables: JSON.stringify(graphQLParams.variables)
  })).catch(function (response) {
    return response.json();
  });
};

_reactDom2.default.render(_react2.default.createElement(_graphiql2.default, { fetcher: graphQLFetcher }), document.getElementById('graphiQl'));

/***/ })

},[777]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93d3dyb290L2NvbXBvbmVudHMvc2hhcmVkL2ZldGNoL2ZldGNoLmpzP2NjNjQiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9jb21wb25lbnRzL3NoYXJlZC9mZXRjaC9mZXRjaFByb2dyZXNzLmpzPzY5NjMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9jb21wb25lbnRzL3NoYXJlZC9mZXRjaC9ub3RPa0Vycm9yL25vdE9rRXJyb3IuanM/ZjJmOSIsIndlYnBhY2s6Ly8vLi93d3dyb290L2NvbXBvbmVudHMvc2hhcmVkL2ZldGNoL3ZhbGlkYXRpb25FcnJvci92YWxpZGF0aW9uRXJyb3IuanM/ZTA1YyIsIndlYnBhY2s6Ly8vLi9+L2dyYXBocWwtbGFuZ3VhZ2Utc2VydmljZS1pbnRlcmZhY2UvZGlzdCBeLiokIiwid2VicGFjazovLy8uL3d3d3Jvb3QvY29tcG9uZW50cy9fY29uZmlnL2dyYXBoaVFsL2dyYXBoaVFsLmpzeCJdLCJuYW1lcyI6WyJnZXRSZXNwb25zZSIsInNlcnZlclJlc3BvbnNlIiwicmVzcG9uc2UiLCJqc29uIiwiYmxvYiIsIlByb21pc2UiLCJyZWplY3QiLCJoYW5kbGVFcnJvciIsImVycm9yIiwid2luZG93IiwiZmV0Y2giLCJwb3N0Rm9ybSIsInVybCIsIm9wdGlvbnMiLCJwYXJhbXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzZXQiLCJrZXkiLCJtZXRob2QiLCJib2R5IiwidGhlbiIsImNhdGNoIiwiZ2V0IiwicG9zdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJmZXRjaFByb2dyZXNzIiwidXBsb2FkRXZlbnRzIiwib3B0cyIsImV2ZW50cyIsInJlcyIsInJlaiIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJlIiwidGFyZ2V0IiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGxvYWQiLCJzZW5kIiwib2siLCJzdGF0dXMiLCJtb2RlbEVycm9ycyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsb2dpblRlc3RBY2NvdW50IiwicmVnaXN0ZXJUZXN0QWNjb3VudCIsImVtYWlsIiwiY29uZmlybVBhc3N3b3JkIiwiZ3JhcGhRTEZldGNoZXIiLCJncmFwaFFMUGFyYW1zIiwidmFyaWFibGVzIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLGNBQUQsRUFBdUM7QUFBQSxNQUF0QkMsUUFBc0IsdUVBQVgsTUFBVzs7QUFDekQsTUFBSUEsYUFBYSxNQUFqQixFQUF5QjtBQUN2QixXQUFPRCxlQUFlRSxJQUFmLEVBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUQsYUFBYSxNQUFqQixFQUF5QjtBQUM5QixXQUFPRCxlQUFlRyxJQUFmLEVBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUYsYUFBYSxVQUFqQixFQUE2QjtBQUNsQyxXQUFPRCxjQUFQO0FBQ0Q7QUFDRCxTQUFPSSxRQUFRQyxNQUFSLENBQWUsMkJBQWYsQ0FBUDtBQUNELENBVEQ7O0FBV0EsSUFBTUMsY0FBYyxTQUFkQSxXQUFjO0FBQUEsU0FBU0YsUUFBUUMsTUFBUixDQUFlRSxLQUFmLENBQVQ7QUFBQSxDQUFwQjs7QUFFQUMsT0FBT0MsS0FBUCxDQUFhQyxRQUFiLEdBQXdCLFVBQUNDLEdBQUQ7QUFBQSxNQUFNQyxPQUFOLHVFQUFnQixFQUFoQjtBQUFBLFNBQXVCLFVBQUNDLE1BQUQsRUFBWTtBQUN6RCxRQUFNQyxXQUFXLElBQUlDLFFBQUosRUFBakI7O0FBRUFDLFdBQU9DLElBQVAsQ0FBWUosTUFBWixFQUFvQkssT0FBcEIsQ0FBNEI7QUFBQSxhQUFPSixTQUFTSyxHQUFULENBQWFDLEdBQWIsRUFBa0JQLE9BQU9P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Ozs7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNbUQsV0FBVyxVQUFqQjtBQUNBLElBQU1DLFdBQVcsVUFBakI7O0FBRUEsSUFBTUMsbUJBQW1CLFNBQW5CQSxnQkFBbUI7QUFBQSxTQUN2QjdDLE1BQU1pQixJQUFOLENBQVcsZ0JBQVgsRUFBNkIsRUFBRXpCLFVBQVUsVUFBWixFQUE3QixFQUF1RDtBQUNyRG1ELHNCQURxRDtBQUVyREM7QUFGcUQsR0FBdkQsQ0FEdUI7QUFBQSxDQUF6Qjs7QUFNQSxJQUFNRSxzQkFBc0IsU0FBdEJBLG1CQUFzQjtBQUFBLFNBQzFCOUMsTUFBTWlCLElBQU4sQ0FBVyxtQkFBWCxFQUFnQztBQUM5QjBCLHNCQUQ4QjtBQUU5QkksV0FBTyxnQkFGdUI7QUFHOUJILHNCQUg4QjtBQUk5QkkscUJBQWlCO0FBSmEsR0FBaEMsRUFLR2pDLEtBTEgsQ0FLUyxVQUFDdkIsUUFBRCxFQUFjO0FBQ3JCLFFBQUlBLFNBQVNpRCxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCSTtBQUNEO0FBQ0YsR0FURCxDQUQwQjtBQUFBLENBQTVCOztBQVlBQzs7QUFFQSxJQUFNRyxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FDckJqRCxNQUFNaUIsSUFBTixDQUFXLFVBQVgsZUFDS2lDLGFBREw7QUFFRUMsZUFBV2pDLEtBQUtDLFNBQUwsQ0FBZStCLGNBQWNDLFNBQTdCO0FBRmIsTUFHR3BDLEtBSEgsQ0FHUztBQUFBLFdBQVl2QixTQUFTQyxJQUFULEVBQVo7QUFBQSxHQUhULENBRHFCO0FBQUEsQ0FBdkI7O0FBTUEsbUJBQVMyRCxNQUFULENBQWdCLG9EQUFVLFNBQVNILGNBQW5CLEdBQWhCLEVBQ0VJLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FERixFIiwiZmlsZSI6ImdyYXBoaVFsLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub3RPa0Vycm9yIGZyb20gJy4vbm90T2tFcnJvci9ub3RPa0Vycm9yJztcbmltcG9ydCB2YWxpZGF0aW9uRXJyb3IgZnJvbSAnLi92YWxpZGF0aW9uRXJyb3IvdmFsaWRhdGlvbkVycm9yJztcbmltcG9ydCBmZXRjaFByb2dyZXNzIGZyb20gJy4vZmV0Y2hQcm9ncmVzcyc7XG5cbmNvbnN0IGdldFJlc3BvbnNlID0gKHNlcnZlclJlc3BvbnNlLCByZXNwb25zZSA9ICdqc29uJykgPT4ge1xuICBpZiAocmVzcG9uc2UgPT09ICdqc29uJykge1xuICAgIHJldHVybiBzZXJ2ZXJSZXNwb25zZS5qc29uKCk7XG4gIH0gZWxzZSBpZiAocmVzcG9uc2UgPT09ICdibG9iJykge1xuICAgIHJldHVybiBzZXJ2ZXJSZXNwb25zZS5ibG9iKCk7XG4gIH0gZWxzZSBpZiAocmVzcG9uc2UgPT09ICdyZXNwb25zZScpIHtcbiAgICByZXR1cm4gc2VydmVyUmVzcG9uc2U7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdpbnZhbGlkIHJlc3BvbnNlIHN1cHBsaWVkJyk7XG59O1xuXG5jb25zdCBoYW5kbGVFcnJvciA9IGVycm9yID0+IFByb21pc2UucmVqZWN0KGVycm9yKTtcblxud2luZG93LmZldGNoLnBvc3RGb3JtID0gKHVybCwgb3B0aW9ucyA9IHt9KSA9PiAocGFyYW1zKSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiBmb3JtRGF0YS5zZXQoa2V5LCBwYXJhbXNba2V5XSkpO1xuXG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBib2R5OiBmb3JtRGF0YSxcbiAgfSkudGhlbih2YWxpZGF0aW9uRXJyb3IpXG4gICAgLnRoZW4obm90T2tFcnJvcilcbiAgICAudGhlbihzZXJ2ZXJSZXNwb25zZSA9PiBnZXRSZXNwb25zZShzZXJ2ZXJSZXNwb25zZSwgb3B0aW9ucy5yZXNwb25zZSkpXG4gICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbn07XG5cbndpbmRvdy5mZXRjaC5nZXQgPSAodXJsLCBvcHRpb25zID0ge30pID0+XG4gIGZldGNoKHVybClcbiAgICAudGhlbihub3RPa0Vycm9yKVxuICAgIC50aGVuKHNlcnZlclJlc3BvbnNlID0+IGdldFJlc3BvbnNlKHNlcnZlclJlc3BvbnNlLCBvcHRpb25zLnJlc3BvbnNlKSlcbiAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXG53aW5kb3cuZmV0Y2gucG9zdCA9ICh1cmwsIG9wdGlvbnMgPSB7fSkgPT4gcGFyYW1zID0+XG4gIGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC4uLnBhcmFtcyxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4obm90T2tFcnJvcilcbiAgICAudGhlbihzZXJ2ZXJSZXNwb25zZSA9PiBnZXRSZXNwb25zZShzZXJ2ZXJSZXNwb25zZSwgb3B0aW9ucy5yZXNwb25zZSkpXG4gICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcblxuLy8gUmVtb3ZlIHRoaXMgd2hlbiBmZXRjaCBzdXBwb3J0cyBwcm9ncmVzc1xud2luZG93LmZldGNoLmZldGNoUHJvZ3Jlc3MgPSAodXJsLCB1cGxvYWRFdmVudHMgPSB7fSkgPT4gKHBhcmFtcykgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4gZm9ybURhdGEuc2V0KGtleSwgcGFyYW1zW2tleV0pKTtcblxuICBmZXRjaFByb2dyZXNzKHVybCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IGZvcm1EYXRhLFxuICB9LCB7fSwgdXBsb2FkRXZlbnRzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93d3dyb290L2NvbXBvbmVudHMvc2hhcmVkL2ZldGNoL2ZldGNoLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHVybCwgb3B0cyA9IHt9LCBldmVudHMsIHVwbG9hZEV2ZW50cykgPT5cbiAgbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICB4aHIub3BlbihvcHRzLm1ldGhvZCB8fCAnZ2V0JywgdXJsLCB0cnVlKTtcblxuICAgIE9iamVjdC5rZXlzKG9wdHMuaGVhZGVycyB8fCB7fSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdHMuaGVhZGVyc1trZXldKTtcbiAgICB9KTtcblxuICAgIHhoci5vbmxvYWQgPSBlID0+IHJlcyhlLnRhcmdldC5yZXNwb25zZVRleHQpO1xuICAgIHhoci5vbmVycm9yID0gcmVqO1xuXG4gICAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKGtleSwgZXZlbnRzW2tleV0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHhoci51cGxvYWQpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVwbG9hZEV2ZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHVwbG9hZEV2ZW50c1trZXldKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHhoci5zZW5kKG9wdHMuYm9keSk7XG4gIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3cm9vdC9jb21wb25lbnRzL3NoYXJlZC9mZXRjaC9mZXRjaFByb2dyZXNzLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHJlc3BvbnNlKSA9PiB7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpO1xuICB9XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93d3dyb290L2NvbXBvbmVudHMvc2hhcmVkL2ZldGNoL25vdE9rRXJyb3Ivbm90T2tFcnJvci5qcyIsImltcG9ydCB7IFN1Ym1pc3Npb25FcnJvciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCAocmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKChtb2RlbEVycm9ycykgPT4ge1xuICAgICAgdGhyb3cgbmV3IFN1Ym1pc3Npb25FcnJvcihtb2RlbEVycm9ycyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3cm9vdC9jb21wb25lbnRzL3NoYXJlZC9mZXRjaC92YWxpZGF0aW9uRXJyb3IvdmFsaWRhdGlvbkVycm9yLmpzIiwidmFyIG1hcCA9IHtcblx0XCIuL0dyYXBoUUxMYW5ndWFnZVNlcnZpY2VcIjogMTc2LFxuXHRcIi4vR3JhcGhRTExhbmd1YWdlU2VydmljZS5qc1wiOiAxNzYsXG5cdFwiLi9HcmFwaFFMTGFuZ3VhZ2VTZXJ2aWNlLmpzLmZsb3dcIjogMTIwNixcblx0XCIuL2F1dG9jb21wbGV0ZVV0aWxzXCI6IDEzMSxcblx0XCIuL2F1dG9jb21wbGV0ZVV0aWxzLmpzXCI6IDEzMSxcblx0XCIuL2F1dG9jb21wbGV0ZVV0aWxzLmpzLmZsb3dcIjogMTIwNyxcblx0XCIuL2dldEF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zXCI6IDEzMixcblx0XCIuL2dldEF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zLmpzXCI6IDEzMixcblx0XCIuL2dldEF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zLmpzLmZsb3dcIjogMTIwOCxcblx0XCIuL2dldERlZmluaXRpb25cIjogMTMzLFxuXHRcIi4vZ2V0RGVmaW5pdGlvbi5qc1wiOiAxMzMsXG5cdFwiLi9nZXREZWZpbml0aW9uLmpzLmZsb3dcIjogMTIwOSxcblx0XCIuL2dldERpYWdub3N0aWNzXCI6IDEzNCxcblx0XCIuL2dldERpYWdub3N0aWNzLmpzXCI6IDEzNCxcblx0XCIuL2dldERpYWdub3N0aWNzLmpzLmZsb3dcIjogMTIxMCxcblx0XCIuL2dldE91dGxpbmVcIjogMTc3LFxuXHRcIi4vZ2V0T3V0bGluZS5qc1wiOiAxNzcsXG5cdFwiLi9nZXRPdXRsaW5lLmpzLmZsb3dcIjogMTIxMSxcblx0XCIuL2luZGV4XCI6IDE3OCxcblx0XCIuL2luZGV4LmpzXCI6IDE3OCxcblx0XCIuL2luZGV4LmpzLmZsb3dcIjogMTIxMlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDUxMztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ3JhcGhxbC1sYW5ndWFnZS1zZXJ2aWNlLWludGVyZmFjZS9kaXN0IF4uKiRcbi8vIG1vZHVsZSBpZCA9IDUxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgR3JhcGhpUUwgZnJvbSAnZ3JhcGhpcWwnO1xuaW1wb3J0ICdncmFwaGlxbC9ncmFwaGlxbC5jc3MnO1xuXG5pbXBvcnQgJy4uLy4uL3NoYXJlZC9mZXRjaC9mZXRjaCc7XG5cbmNvbnN0IHVzZXJuYW1lID0gJ1Rlc3RVc2VyJztcbmNvbnN0IHBhc3N3b3JkID0gJ1Bhc3N3b3JkJztcblxuY29uc3QgbG9naW5UZXN0QWNjb3VudCA9ICgpID0+XG4gIGZldGNoLnBvc3QoJy9hY2NvdW50L2xvZ2luJywgeyByZXNwb25zZTogJ3Jlc3BvbnNlJyB9KSh7XG4gICAgdXNlcm5hbWUsXG4gICAgcGFzc3dvcmQsXG4gIH0pO1xuXG5jb25zdCByZWdpc3RlclRlc3RBY2NvdW50ID0gKCkgPT5cbiAgZmV0Y2gucG9zdCgnL2FjY291bnQvcmVnaXN0ZXInKSh7XG4gICAgdXNlcm5hbWUsXG4gICAgZW1haWw6ICd0ZXN0QGdtYWlsLmNvbScsXG4gICAgcGFzc3dvcmQsXG4gICAgY29uZmlybVBhc3N3b3JkOiAnUGFzc3dvcmQnLFxuICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgIGxvZ2luVGVzdEFjY291bnQoKTtcbiAgICB9XG4gIH0pO1xuXG5yZWdpc3RlclRlc3RBY2NvdW50KCk7XG5cbmNvbnN0IGdyYXBoUUxGZXRjaGVyID0gZ3JhcGhRTFBhcmFtcyA9PlxuICBmZXRjaC5wb3N0KCcvZ3JhcGhxbCcpKHtcbiAgICAuLi5ncmFwaFFMUGFyYW1zLFxuICAgIHZhcmlhYmxlczogSlNPTi5zdHJpbmdpZnkoZ3JhcGhRTFBhcmFtcy52YXJpYWJsZXMpLFxuICB9KS5jYXRjaChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG5SZWFjdERPTS5yZW5kZXIoPEdyYXBoaVFMIGZldGNoZXI9e2dyYXBoUUxGZXRjaGVyfSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyYXBoaVFsJykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3cm9vdC9jb21wb25lbnRzL19jb25maWcvZ3JhcGhpUWwvZ3JhcGhpUWwuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==