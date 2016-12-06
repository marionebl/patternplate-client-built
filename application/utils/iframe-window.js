'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.IFrameWindow = exports.iframeWindowFactory = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _iframeConsole = require('./iframe-console');

var _iframeConsole2 = _interopRequireDefault(_iframeConsole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IFrameWindow = function IFrameWindow(frame) {
	(0, _classCallCheck3.default)(this, IFrameWindow);

	this.window = frame.contentWindow.window;
	var console = new _iframeConsole2.default(frame.src);

	(0, _assign2.default)(this.window, {
		'alert': function iframeAlert() {
			return console.warn('window.alert is disabled in patterns.');
		},
		'confirm': function iframeConfirm() {
			return console.warn('window.confirm is disabled in patterns.');
		},
		'open': function iframeOpen() {
			return console.warn('window.open is disabled in patterns.');
		}
	}, {
		'console': console
	});
}; /*eslint-disable no-console */


function iframeWindowFactory() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (Function.prototype.bind.apply(IFrameWindow, [null].concat(args)))();
}

exports.default = iframeWindowFactory;
exports.iframeWindowFactory = iframeWindowFactory;
exports.IFrameWindow = IFrameWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy9pZnJhbWUtd2luZG93LmpzIl0sIm5hbWVzIjpbIklGcmFtZVdpbmRvdyIsImZyYW1lIiwid2luZG93IiwiY29udGVudFdpbmRvdyIsImNvbnNvbGUiLCJzcmMiLCJpZnJhbWVBbGVydCIsIndhcm4iLCJpZnJhbWVDb25maXJtIiwiaWZyYW1lT3BlbiIsImlmcmFtZVdpbmRvd0ZhY3RvcnkiLCJhcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0lBRU1BLFksR0FDTCxzQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUNuQixNQUFLQyxNQUFMLEdBQWNELE1BQU1FLGFBQU4sQ0FBb0JELE1BQWxDO0FBQ0EsS0FBSUUsVUFBVSw0QkFBa0JILE1BQU1JLEdBQXhCLENBQWQ7O0FBRUEsdUJBQWMsS0FBS0gsTUFBbkIsRUFBMkI7QUFDMUIsV0FBUyxTQUFTSSxXQUFULEdBQXdCO0FBQ2hDLFVBQU9GLFFBQVFHLElBQVIsQ0FBYSx1Q0FBYixDQUFQO0FBQ0EsR0FIeUI7QUFJMUIsYUFBVyxTQUFTQyxhQUFULEdBQTBCO0FBQ3BDLFVBQU9KLFFBQVFHLElBQVIsQ0FBYSx5Q0FBYixDQUFQO0FBQ0EsR0FOeUI7QUFPMUIsVUFBUSxTQUFTRSxVQUFULEdBQXVCO0FBQzlCLFVBQU9MLFFBQVFHLElBQVIsQ0FBYSxzQ0FBYixDQUFQO0FBQ0E7QUFUeUIsRUFBM0IsRUFVRztBQUNGLGFBQVdIO0FBRFQsRUFWSDtBQWFBLEMsRUFyQkY7OztBQXdCQSxTQUFTTSxtQkFBVCxHQUF1QztBQUFBLG1DQUFOQyxJQUFNO0FBQU5BLE1BQU07QUFBQTs7QUFDdEMsMkNBQVdYLFlBQVgsZ0JBQTJCVyxJQUEzQjtBQUNBOztrQkFFY0QsbUI7UUFDZ0JBLG1CLEdBQXZCQSxtQjtRQUNnQlYsWSxHQUFoQkEsWSIsImZpbGUiOiJpZnJhbWUtd2luZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyplc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgSWZyYW1lQ29uc29sZSBmcm9tICcuL2lmcmFtZS1jb25zb2xlJztcblxuY2xhc3MgSUZyYW1lV2luZG93IHtcblx0Y29uc3RydWN0b3IgKGZyYW1lKSB7XG5cdFx0dGhpcy53aW5kb3cgPSBmcmFtZS5jb250ZW50V2luZG93LndpbmRvdztcblx0XHRsZXQgY29uc29sZSA9IG5ldyBJZnJhbWVDb25zb2xlKGZyYW1lLnNyYyk7XG5cblx0XHRPYmplY3QuYXNzaWduKHRoaXMud2luZG93LCB7XG5cdFx0XHQnYWxlcnQnOiBmdW5jdGlvbiBpZnJhbWVBbGVydCAoKSB7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLndhcm4oJ3dpbmRvdy5hbGVydCBpcyBkaXNhYmxlZCBpbiBwYXR0ZXJucy4nKTtcblx0XHRcdH0sXG5cdFx0XHQnY29uZmlybSc6IGZ1bmN0aW9uIGlmcmFtZUNvbmZpcm0gKCkge1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS53YXJuKCd3aW5kb3cuY29uZmlybSBpcyBkaXNhYmxlZCBpbiBwYXR0ZXJucy4nKTtcblx0XHRcdH0sXG5cdFx0XHQnb3Blbic6IGZ1bmN0aW9uIGlmcmFtZU9wZW4gKCkge1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS53YXJuKCd3aW5kb3cub3BlbiBpcyBkaXNhYmxlZCBpbiBwYXR0ZXJucy4nKTtcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHQnY29uc29sZSc6IGNvbnNvbGVcblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBpZnJhbWVXaW5kb3dGYWN0b3J5ICguLi5hcmdzKSB7XG5cdHJldHVybiBuZXcgSUZyYW1lV2luZG93KC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpZnJhbWVXaW5kb3dGYWN0b3J5O1xuZXhwb3J0IHtpZnJhbWVXaW5kb3dGYWN0b3J5IGFzIGlmcmFtZVdpbmRvd0ZhY3Rvcnl9O1xuZXhwb3J0IHtJRnJhbWVXaW5kb3cgYXMgSUZyYW1lV2luZG93fTtcbiJdfQ==