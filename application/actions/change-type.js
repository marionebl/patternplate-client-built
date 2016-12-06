'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _lodash = require('lodash');

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = changeType;
var type = exports.type = 'CHANGE_TYPE';

function changeType(input) {
	_assert2.default.equal(typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input), 'string', 'input for changeType action must be of type string');

	return function (dispatch, getState) {
		var location = getState().routing.locationBeforeTransitions;
		var parsed = _urlQuery2.default.parse(location.query.source || '');
		var type = ['source', 'transformed'].includes(input) ? input : 'source';
		var query = { type: type };
		var source = _urlQuery2.default.format((0, _lodash.merge)({}, parsed, { query: query }));
		dispatch((0, _.patchLocation)({ query: { source: source } }));
	};
}

changeType.type = type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2NoYW5nZS10eXBlLmpzIl0sIm5hbWVzIjpbImNoYW5nZVR5cGUiLCJ0eXBlIiwiaW5wdXQiLCJlcXVhbCIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJsb2NhdGlvbiIsInJvdXRpbmciLCJsb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zIiwicGFyc2VkIiwicGFyc2UiLCJxdWVyeSIsInNvdXJjZSIsImluY2x1ZGVzIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztrQkFFZUEsVTtBQUNSLElBQU1DLHNCQUFPLGFBQWI7O0FBRVAsU0FBU0QsVUFBVCxDQUFvQkUsS0FBcEIsRUFBMkI7QUFDMUIsa0JBQU9DLEtBQVAsUUFBb0JELEtBQXBCLHVEQUFvQkEsS0FBcEIsR0FBMkIsUUFBM0IsRUFBcUMsb0RBQXJDOztBQUVBLFFBQU8sVUFBQ0UsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQzlCLE1BQU1DLFdBQVdELFdBQVdFLE9BQVgsQ0FBbUJDLHlCQUFwQztBQUNBLE1BQU1DLFNBQVMsbUJBQVNDLEtBQVQsQ0FBZUosU0FBU0ssS0FBVCxDQUFlQyxNQUFmLElBQXlCLEVBQXhDLENBQWY7QUFDQSxNQUFNWCxPQUFPLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEJZLFFBQTFCLENBQW1DWCxLQUFuQyxJQUE0Q0EsS0FBNUMsR0FBb0QsUUFBakU7QUFDQSxNQUFNUyxRQUFRLEVBQUNWLFVBQUQsRUFBZDtBQUNBLE1BQU1XLFNBQVMsbUJBQVNFLE1BQVQsQ0FBZ0IsbUJBQU0sRUFBTixFQUFVTCxNQUFWLEVBQWtCLEVBQUNFLFlBQUQsRUFBbEIsQ0FBaEIsQ0FBZjtBQUNBUCxXQUFTLHFCQUFjLEVBQUNPLE9BQU8sRUFBQ0MsY0FBRCxFQUFSLEVBQWQsQ0FBVDtBQUNBLEVBUEQ7QUFRQTs7QUFFRFosV0FBV0MsSUFBWCxHQUFrQkEsSUFBbEIiLCJmaWxlIjoiY2hhbmdlLXR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQge21lcmdlfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHVybFF1ZXJ5IGZyb20gJy4uL3V0aWxzL3VybC1xdWVyeSc7XG5pbXBvcnQge3BhdGNoTG9jYXRpb259IGZyb20gJy4vJztcblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlVHlwZTtcbmV4cG9ydCBjb25zdCB0eXBlID0gJ0NIQU5HRV9UWVBFJztcblxuZnVuY3Rpb24gY2hhbmdlVHlwZShpbnB1dCkge1xuXHRhc3NlcnQuZXF1YWwodHlwZW9mIGlucHV0LCAnc3RyaW5nJywgJ2lucHV0IGZvciBjaGFuZ2VUeXBlIGFjdGlvbiBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nJyk7XG5cblx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcblx0XHRjb25zdCBsb2NhdGlvbiA9IGdldFN0YXRlKCkucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zO1xuXHRcdGNvbnN0IHBhcnNlZCA9IHVybFF1ZXJ5LnBhcnNlKGxvY2F0aW9uLnF1ZXJ5LnNvdXJjZSB8fCAnJyk7XG5cdFx0Y29uc3QgdHlwZSA9IFsnc291cmNlJywgJ3RyYW5zZm9ybWVkJ10uaW5jbHVkZXMoaW5wdXQpID8gaW5wdXQgOiAnc291cmNlJztcblx0XHRjb25zdCBxdWVyeSA9IHt0eXBlfTtcblx0XHRjb25zdCBzb3VyY2UgPSB1cmxRdWVyeS5mb3JtYXQobWVyZ2Uoe30sIHBhcnNlZCwge3F1ZXJ5fSkpO1xuXHRcdGRpc3BhdGNoKHBhdGNoTG9jYXRpb24oe3F1ZXJ5OiB7c291cmNlfX0pKTtcblx0fTtcbn1cblxuY2hhbmdlVHlwZS50eXBlID0gdHlwZTtcbiJdfQ==