'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _getError = require('./get-error');

var _getError2 = _interopRequireDefault(_getError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _lodash.memoize)(function () {
	var onLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash.noop;
	var onError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _lodash.noop;

	return function (e) {
		var document = e.target.contentWindow.document;
		var body = document.body;

		var first = body.firstChild;

		if (!first || !first.innerText) {
			return onLoad(e);
		}

		var lines = first.innerText.split('\n');

		if (lines[0].startsWith('Message: Error in')) {
			var error = (0, _getError2.default)(lines);
			return onError(error);
		}

		return onLoad(e);
	};
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9mcmFtZS9yZWxheS5qcyJdLCJuYW1lcyI6WyJvbkxvYWQiLCJvbkVycm9yIiwiZG9jdW1lbnQiLCJlIiwidGFyZ2V0IiwiY29udGVudFdpbmRvdyIsImJvZHkiLCJmaXJzdCIsImZpcnN0Q2hpbGQiLCJpbm5lclRleHQiLCJsaW5lcyIsInNwbGl0Iiwic3RhcnRzV2l0aCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O2tCQUVlLHFCQUFRLFlBQW1DO0FBQUEsS0FBbENBLE1BQWtDO0FBQUEsS0FBbkJDLE9BQW1COztBQUN6RCxRQUFPLGFBQUs7QUFDWCxNQUFNQyxXQUFXQyxFQUFFQyxNQUFGLENBQVNDLGFBQVQsQ0FBdUJILFFBQXhDO0FBRFcsTUFFSkksSUFGSSxHQUVJSixRQUZKLENBRUpJLElBRkk7O0FBR1gsTUFBTUMsUUFBUUQsS0FBS0UsVUFBbkI7O0FBRUEsTUFBSSxDQUFDRCxLQUFELElBQVUsQ0FBQ0EsTUFBTUUsU0FBckIsRUFBZ0M7QUFDL0IsVUFBT1QsT0FBT0csQ0FBUCxDQUFQO0FBQ0E7O0FBRUQsTUFBTU8sUUFBUUgsTUFBTUUsU0FBTixDQUFnQkUsS0FBaEIsQ0FBc0IsSUFBdEIsQ0FBZDs7QUFFQSxNQUFJRCxNQUFNLENBQU4sRUFBU0UsVUFBVCxDQUFvQixtQkFBcEIsQ0FBSixFQUE4QztBQUM3QyxPQUFNQyxRQUFRLHdCQUFTSCxLQUFULENBQWQ7QUFDQSxVQUFPVCxRQUFRWSxLQUFSLENBQVA7QUFDQTs7QUFFRCxTQUFPYixPQUFPRyxDQUFQLENBQVA7QUFDQSxFQWpCRDtBQWtCQSxDQW5CYyxDIiwiZmlsZSI6InJlbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttZW1vaXplLCBub29wfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdldEVycm9yIGZyb20gJy4vZ2V0LWVycm9yJztcblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZSgob25Mb2FkID0gbm9vcCwgb25FcnJvciA9IG5vb3ApID0+IHtcblx0cmV0dXJuIGUgPT4ge1xuXHRcdGNvbnN0IGRvY3VtZW50ID0gZS50YXJnZXQuY29udGVudFdpbmRvdy5kb2N1bWVudDtcblx0XHRjb25zdCB7Ym9keX0gPSBkb2N1bWVudDtcblx0XHRjb25zdCBmaXJzdCA9IGJvZHkuZmlyc3RDaGlsZDtcblxuXHRcdGlmICghZmlyc3QgfHwgIWZpcnN0LmlubmVyVGV4dCkge1xuXHRcdFx0cmV0dXJuIG9uTG9hZChlKTtcblx0XHR9XG5cblx0XHRjb25zdCBsaW5lcyA9IGZpcnN0LmlubmVyVGV4dC5zcGxpdCgnXFxuJyk7XG5cblx0XHRpZiAobGluZXNbMF0uc3RhcnRzV2l0aCgnTWVzc2FnZTogRXJyb3IgaW4nKSkge1xuXHRcdFx0Y29uc3QgZXJyb3IgPSBnZXRFcnJvcihsaW5lcyk7XG5cdFx0XHRyZXR1cm4gb25FcnJvcihlcnJvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9uTG9hZChlKTtcblx0fTtcbn0pO1xuIl19