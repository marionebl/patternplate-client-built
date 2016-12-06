'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.searchFolder = searchFolder;
exports.matchPattern = matchPattern;
exports.createStems = createStems;
exports.createTokens = createTokens;
exports.getPatterns = getPatterns;
exports.filterPatterns = filterPatterns;
exports.isToken = isToken;
exports.isStem = isStem;
exports.isTagToken = isTagToken;
exports.isFlagToken = isFlagToken;
exports.isDependsToken = isDependsToken;
exports.isProvidesToken = isProvidesToken;
exports.getTokenValues = getTokenValues;

var _lodash = require('lodash');

var _navigate = require('../../utils/navigate');

var _navigate2 = _interopRequireDefault(_navigate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchFolder(search, navigation) {
	var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	if (!search) {
		return;
	}

	var cut = search.slice(0, search.length - 1);
	var match = (0, _navigate2.default)(cut, navigation);

	if (!match || match && !match.type === 'folder') {
		return;
	}

	return rewrap(cut, match, merge);
}

function rewrap(id, data, merge) {
	var fragments = id.split('/').filter(Boolean);
	var stack = [];

	return fragments.reduce(function (registry, fragment, index) {
		var sub = stack.length > 0 ? (0, _navigate2.default)(stack.join('/'), registry) : registry;
		sub[fragment] = fragments.length - 1 === index ? (0, _extends4.default)({}, data, merge) : (0, _extends4.default)({}, merge);
		stack.push(fragment);
		return registry;
	}, {});
}

function matchPattern(pattern) {
	var criteria = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	if ((0, _keys2.default)(criteria).length === 0) {
		return true;
	}

	return (0, _entries2.default)(criteria).every(function (item) {
		var _item = (0, _slicedToArray3.default)(item, 2),
		    name = _item[0],
		    values = _item[1];

		if (values.length === 0) {
			return true;
		}

		if (name === 'tags') {
			var _ret = function () {
				var tags = pattern.manifest.tags || [];
				return {
					v: values.some(function (tag) {
						return tags.includes(tag);
					})
				};
			}();

			if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
		} else if (name === 'flags') {
			var _ret2 = function () {
				var flag = pattern.manifest.flag || '';
				return {
					v: values.some(function (valueFlag) {
						return valueFlag === flag;
					})
				};
			}();

			if ((typeof _ret2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret2)) === "object") return _ret2.v;
		} else if (name === 'depends') {
			var _ret3 = function () {
				var dependencies = (0, _keys2.default)(pattern.manifest.patterns || {});
				return {
					v: values.some(function (dependency) {
						return dependencies.includes(dependency);
					})
				};
			}();

			if ((typeof _ret3 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret3)) === "object") return _ret3.v;
		} else if (name === 'provides') {
			var _ret4 = function () {
				var dependents = (0, _keys2.default)(pattern.manifest.dependentPatterns || {});
				return {
					v: values.some(function (dependent) {
						return dependents.includes(dependent);
					})
				};
			}();

			if ((typeof _ret4 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret4)) === "object") return _ret4.v;
		}

		return true;
	});
}

function createStems(search) {
	return search.split(' ').filter(isStem).filter(Boolean);
}

function createTokens(search) {
	var fragments = search.split(' ');
	var tokens = fragments.filter(isToken);
	var tags = (0, _lodash.flatten)(tokens.filter(isTagToken).map(getTokenValues));
	var flags = (0, _lodash.flatten)(tokens.filter(isFlagToken).map(getTokenValues));
	var depends = (0, _lodash.flatten)(tokens.filter(isDependsToken).map(getTokenValues));
	var provides = (0, _lodash.flatten)(tokens.filter(isProvidesToken).map(getTokenValues));

	return {
		tags: tags, flags: flags, depends: depends, provides: provides
	};
}

function getPatterns(haystack) {
	var criteria = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	return (0, _values2.default)(haystack).reduce(function (registry, item) {
		if (item.type === 'pattern') {
			return matchPattern(item, criteria) ? [].concat((0, _toConsumableArray3.default)(registry), [item]) : registry;
		} else if (item.type === 'folder') {
			return [].concat((0, _toConsumableArray3.default)(registry), (0, _toConsumableArray3.default)(getPatterns(item.children, criteria)));
		}
		return registry;
	}, []);
}

function filterPatterns(patterns, ids) {
	return getPatterns(patterns).filter(function (_ref) {
		var id = _ref.id;
		return ids.includes(id);
	}).reduce(function (registry, item) {
		var fragments = item.id.split('/');
		var key = fragments[fragments.length - 1];
		return (0, _extends4.default)({}, registry, (0, _defineProperty3.default)({}, key, item));
	}, {});
}

var tokenKeys = ['tag', 'flag', 'depends', 'provides'];

function matchesToken(key, token) {
	return token.startsWith(key + ':');
}

function isToken(token) {
	return tokenKeys.some(function (tokenKey) {
		return matchesToken(tokenKey, token);
	});
}

function isStem(token) {
	return !isToken(token);
}

function isTagToken(token) {
	return matchesToken('tag', token);
}

function isFlagToken(token) {
	return matchesToken('flag', token);
}

function isDependsToken(token) {
	return matchesToken('depends', token);
}

function isProvidesToken(token) {
	return matchesToken('provides', token);
}

function getTokenValues(token) {
	return token.split(':').slice(1).join('.').split(',').filter(Boolean).map(function (item) {
		return item.trim();
	});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9zZWFyY2gtbWF0Y2hlcy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInNlYXJjaEZvbGRlciIsIm1hdGNoUGF0dGVybiIsImNyZWF0ZVN0ZW1zIiwiY3JlYXRlVG9rZW5zIiwiZ2V0UGF0dGVybnMiLCJmaWx0ZXJQYXR0ZXJucyIsImlzVG9rZW4iLCJpc1N0ZW0iLCJpc1RhZ1Rva2VuIiwiaXNGbGFnVG9rZW4iLCJpc0RlcGVuZHNUb2tlbiIsImlzUHJvdmlkZXNUb2tlbiIsImdldFRva2VuVmFsdWVzIiwic2VhcmNoIiwibmF2aWdhdGlvbiIsIm1lcmdlIiwiY3V0Iiwic2xpY2UiLCJsZW5ndGgiLCJtYXRjaCIsInR5cGUiLCJyZXdyYXAiLCJpZCIsImRhdGEiLCJmcmFnbWVudHMiLCJzcGxpdCIsImZpbHRlciIsIkJvb2xlYW4iLCJzdGFjayIsInJlZHVjZSIsInJlZ2lzdHJ5IiwiZnJhZ21lbnQiLCJpbmRleCIsInN1YiIsImpvaW4iLCJwdXNoIiwicGF0dGVybiIsImNyaXRlcmlhIiwiZXZlcnkiLCJpdGVtIiwibmFtZSIsInZhbHVlcyIsInRhZ3MiLCJtYW5pZmVzdCIsInNvbWUiLCJpbmNsdWRlcyIsInRhZyIsImZsYWciLCJ2YWx1ZUZsYWciLCJkZXBlbmRlbmNpZXMiLCJwYXR0ZXJucyIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnRzIiwiZGVwZW5kZW50UGF0dGVybnMiLCJkZXBlbmRlbnQiLCJ0b2tlbnMiLCJtYXAiLCJmbGFncyIsImRlcGVuZHMiLCJwcm92aWRlcyIsImhheXN0YWNrIiwiY2hpbGRyZW4iLCJpZHMiLCJrZXkiLCJ0b2tlbktleXMiLCJtYXRjaGVzVG9rZW4iLCJ0b2tlbiIsInN0YXJ0c1dpdGgiLCJ0b2tlbktleSIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBSWdCQSxZLEdBQUFBLFk7UUEyQkFDLFks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SyxDQUdBLEdBSEEsRUFJTFQsS0FKSyxDQUlDLEdBSkQsRUFLTEMsTUFMSyxDQUtFQyxPQUxGLEVBTUw2QixHQU5LLENBTUQ7QUFBQSxTQUFRakIsS0FBSzhCLElBQUwsRUFBUjtBQUFBLEVBTkMsQ0FBUDtBQU9BIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2ZsYXR0ZW59IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBuYXZpZ2F0ZSBmcm9tICcuLi8uLi91dGlscy9uYXZpZ2F0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hGb2xkZXIoc2VhcmNoLCBuYXZpZ2F0aW9uLCBtZXJnZSA9IHt9KSB7XG5cdGlmICghc2VhcmNoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY3V0ID0gc2VhcmNoLnNsaWNlKDAsIHNlYXJjaC5sZW5ndGggLSAxKTtcblx0Y29uc3QgbWF0Y2ggPSBuYXZpZ2F0ZShjdXQsIG5hdmlnYXRpb24pO1xuXG5cdGlmICghbWF0Y2ggfHwgbWF0Y2ggJiYgIW1hdGNoLnR5cGUgPT09ICdmb2xkZXInKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cmV0dXJuIHJld3JhcChjdXQsIG1hdGNoLCBtZXJnZSk7XG59XG5cbmZ1bmN0aW9uIHJld3JhcChpZCwgZGF0YSwgbWVyZ2UpIHtcblx0Y29uc3QgZnJhZ21lbnRzID0gaWQuc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbik7XG5cdGNvbnN0IHN0YWNrID0gW107XG5cblx0cmV0dXJuIGZyYWdtZW50cy5yZWR1Y2UoKHJlZ2lzdHJ5LCBmcmFnbWVudCwgaW5kZXgpID0+IHtcblx0XHRjb25zdCBzdWIgPSBzdGFjay5sZW5ndGggPiAwID8gbmF2aWdhdGUoc3RhY2suam9pbignLycpLCByZWdpc3RyeSkgOiByZWdpc3RyeTtcblx0XHRzdWJbZnJhZ21lbnRdID0gZnJhZ21lbnRzLmxlbmd0aCAtIDEgPT09IGluZGV4ID8gey4uLmRhdGEsIC4uLm1lcmdlfSA6IHsuLi5tZXJnZX07XG5cdFx0c3RhY2sucHVzaChmcmFnbWVudCk7XG5cdFx0cmV0dXJuIHJlZ2lzdHJ5O1xuXHR9LCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFBhdHRlcm4ocGF0dGVybiwgY3JpdGVyaWEgPSB7fSkge1xuXHRpZiAoT2JqZWN0LmtleXMoY3JpdGVyaWEpLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKGNyaXRlcmlhKVxuXHRcdC5ldmVyeShpdGVtID0+IHtcblx0XHRcdGNvbnN0IFtuYW1lLCB2YWx1ZXNdID0gaXRlbTtcblxuXHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChuYW1lID09PSAndGFncycpIHtcblx0XHRcdFx0Y29uc3QgdGFncyA9IHBhdHRlcm4ubWFuaWZlc3QudGFncyB8fCBbXTtcblx0XHRcdFx0cmV0dXJuIHZhbHVlcy5zb21lKHRhZyA9PiB0YWdzLmluY2x1ZGVzKHRhZykpO1xuXHRcdFx0fSBlbHNlIGlmIChuYW1lID09PSAnZmxhZ3MnKSB7XG5cdFx0XHRcdGNvbnN0IGZsYWcgPSBwYXR0ZXJuLm1hbmlmZXN0LmZsYWcgfHwgJyc7XG5cdFx0XHRcdHJldHVybiB2YWx1ZXMuc29tZSh2YWx1ZUZsYWcgPT4gdmFsdWVGbGFnID09PSBmbGFnKTtcblx0XHRcdH0gZWxzZSBpZiAobmFtZSA9PT0gJ2RlcGVuZHMnKSB7XG5cdFx0XHRcdGNvbnN0IGRlcGVuZGVuY2llcyA9IE9iamVjdC5rZXlzKHBhdHRlcm4ubWFuaWZlc3QucGF0dGVybnMgfHwge30pO1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVzLnNvbWUoZGVwZW5kZW5jeSA9PiBkZXBlbmRlbmNpZXMuaW5jbHVkZXMoZGVwZW5kZW5jeSkpO1xuXHRcdFx0fSBlbHNlIGlmIChuYW1lID09PSAncHJvdmlkZXMnKSB7XG5cdFx0XHRcdGNvbnN0IGRlcGVuZGVudHMgPSBPYmplY3Qua2V5cyhwYXR0ZXJuLm1hbmlmZXN0LmRlcGVuZGVudFBhdHRlcm5zIHx8IHt9KTtcblx0XHRcdFx0cmV0dXJuIHZhbHVlcy5zb21lKGRlcGVuZGVudCA9PiBkZXBlbmRlbnRzLmluY2x1ZGVzKGRlcGVuZGVudCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0ZW1zKHNlYXJjaCkge1xuXHRyZXR1cm4gc2VhcmNoLnNwbGl0KCcgJylcblx0XHQuZmlsdGVyKGlzU3RlbSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9rZW5zKHNlYXJjaCkge1xuXHRjb25zdCBmcmFnbWVudHMgPSBzZWFyY2guc3BsaXQoJyAnKTtcblx0Y29uc3QgdG9rZW5zID0gZnJhZ21lbnRzLmZpbHRlcihpc1Rva2VuKTtcblx0Y29uc3QgdGFncyA9IGZsYXR0ZW4odG9rZW5zLmZpbHRlcihpc1RhZ1Rva2VuKS5tYXAoZ2V0VG9rZW5WYWx1ZXMpKTtcblx0Y29uc3QgZmxhZ3MgPSBmbGF0dGVuKHRva2Vucy5maWx0ZXIoaXNGbGFnVG9rZW4pLm1hcChnZXRUb2tlblZhbHVlcykpO1xuXHRjb25zdCBkZXBlbmRzID0gZmxhdHRlbih0b2tlbnMuZmlsdGVyKGlzRGVwZW5kc1Rva2VuKS5tYXAoZ2V0VG9rZW5WYWx1ZXMpKTtcblx0Y29uc3QgcHJvdmlkZXMgPSBmbGF0dGVuKHRva2Vucy5maWx0ZXIoaXNQcm92aWRlc1Rva2VuKS5tYXAoZ2V0VG9rZW5WYWx1ZXMpKTtcblxuXHRyZXR1cm4ge1xuXHRcdHRhZ3MsIGZsYWdzLCBkZXBlbmRzLCBwcm92aWRlc1xuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF0dGVybnMoaGF5c3RhY2ssIGNyaXRlcmlhID0ge30pIHtcblx0cmV0dXJuIE9iamVjdC52YWx1ZXMoaGF5c3RhY2spXG5cdFx0LnJlZHVjZSgocmVnaXN0cnksIGl0ZW0pID0+IHtcblx0XHRcdGlmIChpdGVtLnR5cGUgPT09ICdwYXR0ZXJuJykge1xuXHRcdFx0XHRyZXR1cm4gbWF0Y2hQYXR0ZXJuKGl0ZW0sIGNyaXRlcmlhKSA/XG5cdFx0XHRcdFx0Wy4uLnJlZ2lzdHJ5LCBpdGVtXSA6XG5cdFx0XHRcdFx0cmVnaXN0cnk7XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2ZvbGRlcicpIHtcblx0XHRcdFx0cmV0dXJuIFsuLi5yZWdpc3RyeSwgLi4uZ2V0UGF0dGVybnMoaXRlbS5jaGlsZHJlbiwgY3JpdGVyaWEpXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZWdpc3RyeTtcblx0XHR9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJQYXR0ZXJucyhwYXR0ZXJucywgaWRzKSB7XG5cdHJldHVybiBnZXRQYXR0ZXJucyhwYXR0ZXJucylcblx0XHQuZmlsdGVyKCh7aWR9KSA9PiBpZHMuaW5jbHVkZXMoaWQpKVxuXHRcdC5yZWR1Y2UoKHJlZ2lzdHJ5LCBpdGVtKSA9PiB7XG5cdFx0XHRjb25zdCBmcmFnbWVudHMgPSBpdGVtLmlkLnNwbGl0KCcvJyk7XG5cdFx0XHRjb25zdCBrZXkgPSBmcmFnbWVudHNbZnJhZ21lbnRzLmxlbmd0aCAtIDFdO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucmVnaXN0cnksXG5cdFx0XHRcdFtrZXldOiBpdGVtXG5cdFx0XHR9O1xuXHRcdH0sIHt9KTtcbn1cblxuY29uc3QgdG9rZW5LZXlzID0gWyd0YWcnLCAnZmxhZycsICdkZXBlbmRzJywgJ3Byb3ZpZGVzJ107XG5cbmZ1bmN0aW9uIG1hdGNoZXNUb2tlbihrZXksIHRva2VuKSB7XG5cdHJldHVybiB0b2tlbi5zdGFydHNXaXRoKGAke2tleX06YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Rva2VuKHRva2VuKSB7XG5cdHJldHVybiB0b2tlbktleXMuc29tZSh0b2tlbktleSA9PiBtYXRjaGVzVG9rZW4odG9rZW5LZXksIHRva2VuKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0ZW0odG9rZW4pIHtcblx0cmV0dXJuICFpc1Rva2VuKHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGFnVG9rZW4odG9rZW4pIHtcblx0cmV0dXJuIG1hdGNoZXNUb2tlbigndGFnJywgdG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGbGFnVG9rZW4odG9rZW4pIHtcblx0cmV0dXJuIG1hdGNoZXNUb2tlbignZmxhZycsIHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGVwZW5kc1Rva2VuKHRva2VuKSB7XG5cdHJldHVybiBtYXRjaGVzVG9rZW4oJ2RlcGVuZHMnLCB0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3ZpZGVzVG9rZW4odG9rZW4pIHtcblx0cmV0dXJuIG1hdGNoZXNUb2tlbigncHJvdmlkZXMnLCB0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlblZhbHVlcyh0b2tlbikge1xuXHRyZXR1cm4gdG9rZW5cblx0XHQuc3BsaXQoJzonKVxuXHRcdC5zbGljZSgxKVxuXHRcdC5qb2luKCcuJylcblx0XHQuc3BsaXQoJywnKVxuXHRcdC5maWx0ZXIoQm9vbGVhbilcblx0XHQubWFwKGl0ZW0gPT4gaXRlbS50cmltKCkpO1xufVxuIl19