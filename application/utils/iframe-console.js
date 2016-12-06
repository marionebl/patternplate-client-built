'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IframeConsole = function () {
	function IframeConsole() {
		var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		(0, _classCallCheck3.default)(this, IframeConsole);

		this.origin = origin;
		this.prefix = '[' + origin + ']';
		this.native = global.window.console;
	}

	(0, _createClass3.default)(IframeConsole, [{
		key: 'trace',
		value: function trace() {
			var _native;

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return (_native = this.native).trace.apply(_native, [this.prefix].concat(args));
		}
	}, {
		key: 'debug',
		value: function debug() {
			var _native2;

			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return (_native2 = this.native).debug.apply(_native2, [this.prefix].concat(args));
		}
	}, {
		key: 'info',
		value: function info() {
			var _native3;

			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			return (_native3 = this.native).info.apply(_native3, [this.prefix].concat(args));
		}
	}, {
		key: 'log',
		value: function log() {
			var _native4;

			for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				args[_key4] = arguments[_key4];
			}

			return (_native4 = this.native).log.apply(_native4, [this.prefix].concat(args));
		}
	}, {
		key: 'warn',
		value: function warn() {
			var _native5;

			for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				args[_key5] = arguments[_key5];
			}

			return (_native5 = this.native).warn.apply(_native5, [this.prefix].concat(args));
		}
	}, {
		key: 'error',
		value: function error() {
			var _native6;

			for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
				args[_key6] = arguments[_key6];
			}

			return (_native6 = this.native).error.apply(_native6, [this.prefix].concat(args));
		}
	}]);
	return IframeConsole;
}();

exports.default = IframeConsole;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy9pZnJhbWUtY29uc29sZS5qcyJdLCJuYW1lcyI6WyJJZnJhbWVDb25zb2xlIiwib3JpZ2luIiwicHJlZml4IiwibmF0aXZlIiwiZ2xvYmFsIiwid2luZG93IiwiY29uc29sZSIsImFyZ3MiLCJ0cmFjZSIsImRlYnVnIiwiaW5mbyIsImxvZyIsIndhcm4iLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxhO0FBQ0wsMEJBQXlCO0FBQUEsTUFBYkMsTUFBYSx1RUFBSixFQUFJO0FBQUE7O0FBQ3hCLE9BQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLE9BQUtDLE1BQUwsU0FBa0JELE1BQWxCO0FBQ0EsT0FBS0UsTUFBTCxHQUFjQyxPQUFPQyxNQUFQLENBQWNDLE9BQTVCO0FBQ0E7Ozs7MEJBRWM7QUFBQTs7QUFBQSxxQ0FBTkMsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQ2QsVUFBTyxnQkFBS0osTUFBTCxFQUFZSyxLQUFaLGlCQUFzQixLQUFLTixNQUEzQixTQUFzQ0ssSUFBdEMsRUFBUDtBQUNBOzs7MEJBRWM7QUFBQTs7QUFBQSxzQ0FBTkEsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQ2QsVUFBTyxpQkFBS0osTUFBTCxFQUFZTSxLQUFaLGtCQUFzQixLQUFLUCxNQUEzQixTQUFzQ0ssSUFBdEMsRUFBUDtBQUNBOzs7eUJBRWE7QUFBQTs7QUFBQSxzQ0FBTkEsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQ2IsVUFBTyxpQkFBS0osTUFBTCxFQUFZTyxJQUFaLGtCQUFxQixLQUFLUixNQUExQixTQUFxQ0ssSUFBckMsRUFBUDtBQUNBOzs7d0JBRVk7QUFBQTs7QUFBQSxzQ0FBTkEsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQ1osVUFBTyxpQkFBS0osTUFBTCxFQUFZUSxHQUFaLGtCQUFvQixLQUFLVCxNQUF6QixTQUFvQ0ssSUFBcEMsRUFBUDtBQUNBOzs7eUJBRWE7QUFBQTs7QUFBQSxzQ0FBTkEsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQ2IsVUFBTyxpQkFBS0osTUFBTCxFQUFZUyxJQUFaLGtCQUFxQixLQUFLVixNQUExQixTQUFxQ0ssSUFBckMsRUFBUDtBQUNBOzs7MEJBRWM7QUFBQTs7QUFBQSxzQ0FBTkEsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQ2QsVUFBTyxpQkFBS0osTUFBTCxFQUFZVSxLQUFaLGtCQUFzQixLQUFLWCxNQUEzQixTQUFzQ0ssSUFBdEMsRUFBUDtBQUNBOzs7OztrQkFHYVAsYSIsImZpbGUiOiJpZnJhbWUtY29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIElmcmFtZUNvbnNvbGUge1xuXHRjb25zdHJ1Y3RvcihvcmlnaW4gPSAnJykge1xuXHRcdHRoaXMub3JpZ2luID0gb3JpZ2luO1xuXHRcdHRoaXMucHJlZml4ID0gYFske29yaWdpbn1dYDtcblx0XHR0aGlzLm5hdGl2ZSA9IGdsb2JhbC53aW5kb3cuY29uc29sZTtcblx0fVxuXG5cdHRyYWNlKC4uLmFyZ3MpIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmUudHJhY2UoLi4uW3RoaXMucHJlZml4LCAuLi5hcmdzXSk7XG5cdH1cblxuXHRkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlLmRlYnVnKC4uLlt0aGlzLnByZWZpeCwgLi4uYXJnc10pO1xuXHR9XG5cblx0aW5mbyguLi5hcmdzKSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlLmluZm8oLi4uW3RoaXMucHJlZml4LCAuLi5hcmdzXSk7XG5cdH1cblxuXHRsb2coLi4uYXJncykge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZS5sb2coLi4uW3RoaXMucHJlZml4LCAuLi5hcmdzXSk7XG5cdH1cblxuXHR3YXJuKC4uLmFyZ3MpIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmUud2FybiguLi5bdGhpcy5wcmVmaXgsIC4uLmFyZ3NdKTtcblx0fVxuXG5cdGVycm9yKC4uLmFyZ3MpIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmUuZXJyb3IoLi4uW3RoaXMucHJlZml4LCAuLi5hcmdzXSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSWZyYW1lQ29uc29sZTtcbiJdfQ==