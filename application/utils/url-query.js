'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

exports.format = format;
exports.parse = parse;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function has(token) {
	return function (item) {
		return item.includes(token);
	};
}

function div(token) {
	return function (item) {
		return item.split(token).slice(0, 2);
	};
}

function not(fn) {
	return function () {
		return !fn.apply(undefined, arguments);
	};
}

function sanitize(input) {
	return input.split('/').filter(Boolean).join('/');
}

function shove(input) {
	var index = input.length - 1;
	if (input[index] === '/') {
		return input.slice(0, index);
	}
	return input;
}

function format() {
	var parsed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var query = (0, _entries2.default)(parsed.query || {}).reduce(function (result, entry) {
		return [].concat((0, _toConsumableArray3.default)(result), [entry.join('--')]);
	}, []);

	var extension = _path2.default.extname(parsed.pathname || '');

	var before = extension ? _path2.default.dirname(parsed.pathname) : shove(parsed.pathname);
	var after = extension ? _path2.default.basename(parsed.pathname) : '';

	return [before].concat((0, _toConsumableArray3.default)(query), [after]).filter(Boolean).join('/');
}

function parse() {
	var urlPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	var parsed = _url2.default.parse(urlPath);
	var raw = parsed.pathname || '';

	var pathname = raw.split('/').filter(not(has('--'))).join('/');

	var query = raw.split('/').filter(has('--')).map(div('--')).reduce(function (registry, entry) {
		var _entry = (0, _slicedToArray3.default)(entry, 2),
		    key = _entry[0],
		    value = _entry[1];

		registry[key] = value;
		return registry;
	}, {});

	return {
		pathname: pathname,
		query: query
	};
}

exports.default = { parse: parse, format: format };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy91cmwtcXVlcnkuanMiXSwibmFtZXMiOlsiZm9ybWF0IiwicGFyc2UiLCJoYXMiLCJ0b2tlbiIsIml0ZW0iLCJpbmNsdWRlcyIsImRpdiIsInNwbGl0Iiwic2xpY2UiLCJub3QiLCJmbiIsInNhbml0aXplIiwiaW5wdXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInNob3ZlIiwiaW5kZXgiLCJsZW5ndGgiLCJwYXJzZWQiLCJxdWVyeSIsInJlZHVjZSIsInJlc3VsdCIsImVudHJ5IiwiZXh0ZW5zaW9uIiwiZXh0bmFtZSIsInBhdGhuYW1lIiwiYmVmb3JlIiwiZGlybmFtZSIsImFmdGVyIiwiYmFzZW5hbWUiLCJ1cmxQYXRoIiwicmF3IiwibWFwIiwicmVnaXN0cnkiLCJrZXkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBMkJnQkEsTSxHQUFBQSxNO1FBWUFDLEssR0FBQUEsSzs7QUF2Q2hCOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNDLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUNuQixRQUFPO0FBQUEsU0FBUUMsS0FBS0MsUUFBTCxDQUFjRixLQUFkLENBQVI7QUFBQSxFQUFQO0FBQ0E7O0FBRUQsU0FBU0csR0FBVCxDQUFhSCxLQUFiLEVBQW9CO0FBQ25CLFFBQU87QUFBQSxTQUFRQyxLQUFLRyxLQUFMLENBQVdKLEtBQVgsRUFBa0JLLEtBQWxCLENBQXdCLENBQXhCLEVBQTJCLENBQTNCLENBQVI7QUFBQSxFQUFQO0FBQ0E7O0FBRUQsU0FBU0MsR0FBVCxDQUFhQyxFQUFiLEVBQWlCO0FBQ2hCLFFBQU87QUFBQSxTQUFhLENBQUNBLDhCQUFkO0FBQUEsRUFBUDtBQUNBOztBQUVELFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3hCLFFBQU9BLE1BQU1MLEtBQU4sQ0FBWSxHQUFaLEVBQWlCTSxNQUFqQixDQUF3QkMsT0FBeEIsRUFBaUNDLElBQWpDLENBQXNDLEdBQXRDLENBQVA7QUFDQTs7QUFFRCxTQUFTQyxLQUFULENBQWVKLEtBQWYsRUFBc0I7QUFDckIsS0FBTUssUUFBUUwsTUFBTU0sTUFBTixHQUFlLENBQTdCO0FBQ0EsS0FBSU4sTUFBTUssS0FBTixNQUFpQixHQUFyQixFQUEwQjtBQUN6QixTQUFPTCxNQUFNSixLQUFOLENBQVksQ0FBWixFQUFlUyxLQUFmLENBQVA7QUFDQTtBQUNELFFBQU9MLEtBQVA7QUFDQTs7QUFFTSxTQUFTWixNQUFULEdBQTZCO0FBQUEsS0FBYm1CLE1BQWEsdUVBQUosRUFBSTs7QUFDbkMsS0FBTUMsUUFBUSx1QkFBZUQsT0FBT0MsS0FBUCxJQUFnQixFQUEvQixFQUNaQyxNQURZLENBQ0wsVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsb0RBQXVCRCxNQUF2QixJQUErQkMsTUFBTVIsSUFBTixDQUFXLElBQVgsQ0FBL0I7QUFBQSxFQURLLEVBQzZDLEVBRDdDLENBQWQ7O0FBR0EsS0FBTVMsWUFBWSxlQUFLQyxPQUFMLENBQWFOLE9BQU9PLFFBQVAsSUFBbUIsRUFBaEMsQ0FBbEI7O0FBRUEsS0FBTUMsU0FBU0gsWUFBWSxlQUFLSSxPQUFMLENBQWFULE9BQU9PLFFBQXBCLENBQVosR0FBNENWLE1BQU1HLE9BQU9PLFFBQWIsQ0FBM0Q7QUFDQSxLQUFNRyxRQUFRTCxZQUFZLGVBQUtNLFFBQUwsQ0FBY1gsT0FBT08sUUFBckIsQ0FBWixHQUE2QyxFQUEzRDs7QUFFQSxRQUFPLENBQUNDLE1BQUQsMENBQVlQLEtBQVosSUFBbUJTLEtBQW5CLEdBQTBCaEIsTUFBMUIsQ0FBaUNDLE9BQWpDLEVBQTBDQyxJQUExQyxDQUErQyxHQUEvQyxDQUFQO0FBQ0E7O0FBRU0sU0FBU2QsS0FBVCxHQUE2QjtBQUFBLEtBQWQ4QixPQUFjLHVFQUFKLEVBQUk7O0FBQ25DLEtBQU1aLFNBQVMsY0FBSWxCLEtBQUosQ0FBVThCLE9BQVYsQ0FBZjtBQUNBLEtBQU1DLE1BQU1iLE9BQU9PLFFBQVAsSUFBbUIsRUFBL0I7O0FBRUEsS0FBTUEsV0FBV00sSUFBSXpCLEtBQUosQ0FBVSxHQUFWLEVBQ2ZNLE1BRGUsQ0FDUkosSUFBSVAsSUFBSSxJQUFKLENBQUosQ0FEUSxFQUVmYSxJQUZlLENBRVYsR0FGVSxDQUFqQjs7QUFJQSxLQUFNSyxRQUFRWSxJQUFJekIsS0FBSixDQUFVLEdBQVYsRUFDWk0sTUFEWSxDQUNKWCxJQUFJLElBQUosQ0FESSxFQUVaK0IsR0FGWSxDQUVSM0IsSUFBSSxJQUFKLENBRlEsRUFHWmUsTUFIWSxDQUdMLFVBQUNhLFFBQUQsRUFBV1gsS0FBWCxFQUFxQjtBQUFBLDRDQUNQQSxLQURPO0FBQUEsTUFDckJZLEdBRHFCO0FBQUEsTUFDaEJDLEtBRGdCOztBQUU1QkYsV0FBU0MsR0FBVCxJQUFnQkMsS0FBaEI7QUFDQSxTQUFPRixRQUFQO0FBQ0EsRUFQWSxFQU9WLEVBUFUsQ0FBZDs7QUFTQSxRQUFPO0FBQ05SLG9CQURNO0FBRU5OO0FBRk0sRUFBUDtBQUlBOztrQkFFYyxFQUFDbkIsWUFBRCxFQUFRRCxjQUFSLEUiLCJmaWxlIjoidXJsLXF1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgdXJsIGZyb20gJ3VybCc7XG5cbmZ1bmN0aW9uIGhhcyh0b2tlbikge1xuXHRyZXR1cm4gaXRlbSA9PiBpdGVtLmluY2x1ZGVzKHRva2VuKTtcbn1cblxuZnVuY3Rpb24gZGl2KHRva2VuKSB7XG5cdHJldHVybiBpdGVtID0+IGl0ZW0uc3BsaXQodG9rZW4pLnNsaWNlKDAsIDIpO1xufVxuXG5mdW5jdGlvbiBub3QoZm4pIHtcblx0cmV0dXJuICguLi5hcmdzKSA9PiAhZm4oLi4uYXJncyk7XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplKGlucHV0KSB7XG5cdHJldHVybiBpbnB1dC5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKS5qb2luKCcvJyk7XG59XG5cbmZ1bmN0aW9uIHNob3ZlKGlucHV0KSB7XG5cdGNvbnN0IGluZGV4ID0gaW5wdXQubGVuZ3RoIC0gMTtcblx0aWYgKGlucHV0W2luZGV4XSA9PT0gJy8nKSB7XG5cdFx0cmV0dXJuIGlucHV0LnNsaWNlKDAsIGluZGV4KTtcblx0fVxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQocGFyc2VkID0ge30pIHtcblx0Y29uc3QgcXVlcnkgPSBPYmplY3QuZW50cmllcyhwYXJzZWQucXVlcnkgfHwge30pXG5cdFx0LnJlZHVjZSgocmVzdWx0LCBlbnRyeSkgPT4gWy4uLnJlc3VsdCwgZW50cnkuam9pbignLS0nKV0sIFtdKTtcblxuXHRjb25zdCBleHRlbnNpb24gPSBwYXRoLmV4dG5hbWUocGFyc2VkLnBhdGhuYW1lIHx8ICcnKTtcblxuXHRjb25zdCBiZWZvcmUgPSBleHRlbnNpb24gPyBwYXRoLmRpcm5hbWUocGFyc2VkLnBhdGhuYW1lKSA6IHNob3ZlKHBhcnNlZC5wYXRobmFtZSk7XG5cdGNvbnN0IGFmdGVyID0gZXh0ZW5zaW9uID8gcGF0aC5iYXNlbmFtZShwYXJzZWQucGF0aG5hbWUpIDogJyc7XG5cblx0cmV0dXJuIFtiZWZvcmUsIC4uLnF1ZXJ5LCBhZnRlcl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJy8nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHVybFBhdGggPSAnJykge1xuXHRjb25zdCBwYXJzZWQgPSB1cmwucGFyc2UodXJsUGF0aCk7XG5cdGNvbnN0IHJhdyA9IHBhcnNlZC5wYXRobmFtZSB8fCAnJztcblxuXHRjb25zdCBwYXRobmFtZSA9IHJhdy5zcGxpdCgnLycpXG5cdFx0LmZpbHRlcihub3QoaGFzKCctLScpKSlcblx0XHQuam9pbignLycpO1xuXG5cdGNvbnN0IHF1ZXJ5ID0gcmF3LnNwbGl0KCcvJylcblx0XHQuZmlsdGVyKChoYXMoJy0tJykpKVxuXHRcdC5tYXAoZGl2KCctLScpKVxuXHRcdC5yZWR1Y2UoKHJlZ2lzdHJ5LCBlbnRyeSkgPT4ge1xuXHRcdFx0Y29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cdFx0XHRyZWdpc3RyeVtrZXldID0gdmFsdWU7XG5cdFx0XHRyZXR1cm4gcmVnaXN0cnk7XG5cdFx0fSwge30pO1xuXG5cdHJldHVybiB7XG5cdFx0cGF0aG5hbWUsXG5cdFx0cXVlcnlcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge3BhcnNlLCBmb3JtYXR9O1xuIl19