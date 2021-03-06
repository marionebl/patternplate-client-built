'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = configureStore;

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _topologicallyCombineReducers = require('topologically-combine-reducers');

var _topologicallyCombineReducers2 = _interopRequireDefault(_topologicallyCombineReducers);

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(history, initial) {
	var reducer = hydrateable((0, _topologicallyCombineReducers2.default)((0, _extends3.default)({ routing: _reactRouterRedux.routerReducer }, _reducers2.default), _reducers.dependencies));

	var middlewares = [_reduxThunk2.default, _reduxPromise2.default, /* logger(),*/(0, _reactRouterRedux.routerMiddleware)(history)];

	var middleware = _redux.applyMiddleware.apply(undefined, middlewares);
	var store = (0, _redux.createStore)(reducer, initial, (0, _redux.compose)(middleware));

	return store;
}
// import logger from 'redux-logger';

function hydrateable(reducer) {
	return function (state, action) {
		switch (action.type) {
			case '@@APPLY_STATE':
				return reducer(action.payload, action);
			default:
				return reducer(state, action);
		}
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWFjdC1yb3V0ZXMvc3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJoaXN0b3J5IiwiaW5pdGlhbCIsInJlZHVjZXIiLCJoeWRyYXRlYWJsZSIsInJvdXRpbmciLCJtaWRkbGV3YXJlcyIsIm1pZGRsZXdhcmUiLCJzdG9yZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBU3dCQSxjOztBQVR4Qjs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7O0FBRWUsU0FBU0EsY0FBVCxDQUF3QkMsT0FBeEIsRUFBaUNDLE9BQWpDLEVBQTBDO0FBQ3hELEtBQU1DLFVBQVVDLFlBQVkscUVBQVVDLHdDQUFWLGdEQUFaLENBQWhCOztBQUVBLEtBQU1DLGNBQWMsK0NBQWlCLGNBQWUsd0NBQWlCTCxPQUFqQixDQUFoQyxDQUFwQjs7QUFFQSxLQUFNTSxhQUFhLHdDQUFtQkQsV0FBbkIsQ0FBbkI7QUFDQSxLQUFNRSxRQUFRLHdCQUFZTCxPQUFaLEVBQXFCRCxPQUFyQixFQUE4QixvQkFBUUssVUFBUixDQUE5QixDQUFkOztBQUVBLFFBQU9DLEtBQVA7QUFDQTtBQWJEOztBQWVBLFNBQVNKLFdBQVQsQ0FBcUJELE9BQXJCLEVBQThCO0FBQzdCLFFBQU8sVUFBQ00sS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3pCLFVBQVFBLE9BQU9DLElBQWY7QUFDQyxRQUFLLGVBQUw7QUFDQyxXQUFPUixRQUFRTyxPQUFPRSxPQUFmLEVBQXdCRixNQUF4QixDQUFQO0FBQ0Q7QUFDQyxXQUFPUCxRQUFRTSxLQUFSLEVBQWVDLE1BQWYsQ0FBUDtBQUpGO0FBTUEsRUFQRDtBQVFBIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge3JvdXRlclJlZHVjZXIgYXMgcm91dGluZywgcm91dGVyTWlkZGxld2FyZX0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgdG9wb2xvZ3kgZnJvbSAndG9wb2xvZ2ljYWxseS1jb21iaW5lLXJlZHVjZXJzJztcbmltcG9ydCBwcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UnO1xuLy8gaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInO1xuXG5pbXBvcnQgcmVkdWNlcnMsIHtkZXBlbmRlbmNpZXN9IGZyb20gJy4uL3JlZHVjZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaGlzdG9yeSwgaW5pdGlhbCkge1xuXHRjb25zdCByZWR1Y2VyID0gaHlkcmF0ZWFibGUodG9wb2xvZ3koe3JvdXRpbmcsIC4uLnJlZHVjZXJzfSwgZGVwZW5kZW5jaWVzKSk7XG5cblx0Y29uc3QgbWlkZGxld2FyZXMgPSBbdGh1bmssIHByb21pc2UsIC8qIGxvZ2dlcigpLCovIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSldO1xuXG5cdGNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpO1xuXHRjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWwsIGNvbXBvc2UobWlkZGxld2FyZSkpO1xuXG5cdHJldHVybiBzdG9yZTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZWFibGUocmVkdWNlcikge1xuXHRyZXR1cm4gKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRjYXNlICdAQEFQUExZX1NUQVRFJzpcblx0XHRcdFx0cmV0dXJuIHJlZHVjZXIoYWN0aW9uLnBheWxvYWQsIGFjdGlvbik7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblx0XHR9XG5cdH07XG59XG4iXX0=