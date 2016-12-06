'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _lodash = require('lodash');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _resolve = require('resolve');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _platform = require('platform');

var _platform2 = _interopRequireDefault(_platform);

var _server = require('../application/react-routes/server');

var _server2 = _interopRequireDefault(_server);

var _layouts = require('../application/layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _getIdByPathname = require('../application/utils/get-id-by-pathname');

var _getIdByPathname2 = _interopRequireDefault(_getIdByPathname);

var _navigate = require('../application/utils/navigate');

var _navigate2 = _interopRequireDefault(_navigate);

var _icon = require('../application/components/common/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cwd = process.cwd();
var resolve = function resolve(id) {
	return (0, _resolve.sync)(id, { basedir: cwd });
};

var getSchema = require(resolve('patternplate-server/library/get-schema'));
var getNavigation = require(resolve('patternplate-server/library/get-navigation'));
var getPatternMetaData = require(resolve('patternplate-server/library/get-pattern-meta-data'));
// const getPatternSource = require(resolve('patternplate-server/library/get-pattern-source'));

var defaultData = {
	schema: {},
	navigation: {},
	patterns: null,
	messages: []
};

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(application, pageUrl) {
		var app, client, server, parsed, depth, query, base, id, schema, navigation, pattern, isPattern, patternData, config, options, serverData, data, content, head, icons;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						app = application.parent;
						client = application;
						server = app.server;
						parsed = _url2.default.parse(pageUrl);
						depth = parsed.pathname.split('/').filter(Boolean).length;
						query = _queryString2.default.parse(parsed.query);
						base = depth > 0 ? Array(depth).fill('..').join('/') : '.';
						id = (0, _getIdByPathname2.default)(parsed.pathname);

						if (!app) {
							_context.next = 14;
							break;
						}

						_context.next = 11;
						return getSchema(app, client, server);

					case 11:
						_context.t0 = _context.sent;
						_context.next = 15;
						break;

					case 14:
						_context.t0 = {};

					case 15:
						schema = _context.t0;

						if (!app) {
							_context.next = 22;
							break;
						}

						_context.next = 19;
						return getNavigation(app, client, server);

					case 19:
						_context.t1 = _context.sent;
						_context.next = 23;
						break;

					case 22:
						_context.t1 = {};

					case 23:
						navigation = _context.t1;
						pattern = (0, _lodash.merge)({}, (0, _navigate2.default)(id, navigation));
						isPattern = pattern && pattern.type === 'pattern';
						// const sourceId = query.source;

						if (!isPattern) {
							_context.next = 37;
							break;
						}

						_context.prev = 27;
						_context.next = 30;
						return getPatternMetaData(server, id);

					case 30:
						patternData = _context.sent;

						(0, _lodash.merge)(pattern, patternData);
						_context.next = 37;
						break;

					case 34:
						_context.prev = 34;
						_context.t2 = _context['catch'](27);

						application.log.error(_context.t2);

					case 37:
						config = application.configuration.ui;
						options = {
							url: pageUrl,
							title: application.configuration.ui.title || schema.name,
							theme: query.theme || application.configuration.ui.theme,
							config: config
						};
						serverData = { schema: schema, navigation: navigation, pattern: pattern };
						data = (0, _lodash.merge)({}, defaultData, options.data, serverData, { config: config }, {
							schema: {
								serverOsName: _os2.default.type(),
								serverOsVersion: _os2.default.release(),
								serverRuntimeName: _platform2.default.name,
								serverRuntimeVersion: _platform2.default.version
							},
							startPathname: pageUrl,
							startBase: base
						});
						_context.next = 43;
						return (0, _server2.default)(options.url, data);

					case 43:
						content = _context.sent;
						head = _reactHelmet2.default.rewind();
						icons = _icon2.default.rewind();
						return _context.abrupt('return', (0, _layouts2.default)({
							attributes: head.htmlAttributes,
							base: base,
							content: content,
							icons: icons,
							data: (0, _stringify2.default)(data),
							link: head.link,
							meta: head.meta,
							style: head.style,
							title: head.title,
							scripts: [base + '/script/vendors.bundle.js', base + '/script/index.bundle.js']
						}));

					case 47:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[27, 34]]);
	}));

	function renderPage(_x, _x2) {
		return _ref.apply(this, arguments);
	}

	return renderPage;
}();

/* async function consumeFile(input) {
	if (isStream(input)) {
		return await streamToString(input);
	}

	return input;
}

function streamToString(input) {
	return new Promise((resolve, reject) => {
		const buffers = [];
		input.on('data', chunk => buffers.push(chunk));
		input.on('end', () => resolve(Buffer.concat(buffers).toString()));
		input.on('error', reject);
	});
} */


module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9saWJyYXJ5L3JlbmRlci1wYWdlLmpzIl0sIm5hbWVzIjpbImN3ZCIsInByb2Nlc3MiLCJyZXNvbHZlIiwiaWQiLCJiYXNlZGlyIiwiZ2V0U2NoZW1hIiwicmVxdWlyZSIsImdldE5hdmlnYXRpb24iLCJnZXRQYXR0ZXJuTWV0YURhdGEiLCJkZWZhdWx0RGF0YSIsInNjaGVtYSIsIm5hdmlnYXRpb24iLCJwYXR0ZXJucyIsIm1lc3NhZ2VzIiwiYXBwbGljYXRpb24iLCJwYWdlVXJsIiwiYXBwIiwicGFyZW50IiwiY2xpZW50Iiwic2VydmVyIiwicGFyc2VkIiwicGFyc2UiLCJkZXB0aCIsInBhdGhuYW1lIiwic3BsaXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwibGVuZ3RoIiwicXVlcnkiLCJiYXNlIiwiQXJyYXkiLCJmaWxsIiwiam9pbiIsInBhdHRlcm4iLCJpc1BhdHRlcm4iLCJ0eXBlIiwicGF0dGVybkRhdGEiLCJsb2ciLCJlcnJvciIsImNvbmZpZyIsImNvbmZpZ3VyYXRpb24iLCJ1aSIsIm9wdGlvbnMiLCJ1cmwiLCJ0aXRsZSIsIm5hbWUiLCJ0aGVtZSIsInNlcnZlckRhdGEiLCJkYXRhIiwic2VydmVyT3NOYW1lIiwic2VydmVyT3NWZXJzaW9uIiwicmVsZWFzZSIsInNlcnZlclJ1bnRpbWVOYW1lIiwic2VydmVyUnVudGltZVZlcnNpb24iLCJ2ZXJzaW9uIiwic3RhcnRQYXRobmFtZSIsInN0YXJ0QmFzZSIsImNvbnRlbnQiLCJoZWFkIiwicmV3aW5kIiwiaWNvbnMiLCJhdHRyaWJ1dGVzIiwiaHRtbEF0dHJpYnV0ZXMiLCJsaW5rIiwibWV0YSIsInN0eWxlIiwic2NyaXB0cyIsInJlbmRlclBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFF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QW9DRCxtQkFBTSxFQUFOLEVBQVV2QyxXQUFWLEVBQXVCaUMsUUFBUU0sSUFBL0IsRUFBcUNELFVBQXJDLEVBQWlELEVBQUNSLGNBQUQsRUFBakQsRUFBMkQ7QUFDdkU3QixlQUFRO0FBQ1B1QyxzQkFBYyxhQUFHZCxJQUFILEVBRFA7QUFFUGUseUJBQWlCLGFBQUdDLE9BQUgsRUFGVjtBQUdQQywyQkFBbUIsbUJBQVNQLElBSHJCO0FBSVBRLDhCQUFzQixtQkFBU0M7QUFKeEIsUUFEK0Q7QUFPdkVDLHNCQUFleEMsT0FQd0Q7QUFRdkV5QyxrQkFBVzNCO0FBUjRELE9BQTNELENBcENDO0FBQUE7QUFBQSxhQStDUSxzQkFBT2EsUUFBUUMsR0FBZixFQUFvQkssSUFBcEIsQ0EvQ1I7O0FBQUE7QUErQ1JTLGFBL0NRO0FBZ0RSQyxVQWhEUSxHQWdERCxzQkFBT0MsTUFBUCxFQWhEQztBQWlEUkMsV0FqRFEsR0FpREEsZUFBS0QsTUFBTCxFQWpEQTtBQUFBLHVDQW1EUCx1QkFBTztBQUNiRSxtQkFBWUgsS0FBS0ksY0FESjtBQUViakMsaUJBRmE7QUFHYjRCLHVCQUhhO0FBSWJHLG1CQUphO0FBS2JaLGFBQU0seUJBQWVBLElBQWYsQ0FMTztBQU1iZSxhQUFNTCxLQUFLSyxJQU5FO0FBT2JDLGFBQU1OLEtBQUtNLElBUEU7QUFRYkMsY0FBT1AsS0FBS08sS0FSQztBQVNickIsY0FBT2MsS0FBS2QsS0FUQztBQVVic0IsZ0JBQVMsQ0FDTHJDLElBREssZ0NBRUxBLElBRks7QUFWSSxPQUFQLENBbkRPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEU7O1VBQWVzQyxVOzs7O1FBQUFBLFU7OztBQW9FOUIiLCJmaWxlIjoicmVuZGVyLXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuXG5pbXBvcnQge21lcmdlfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHtzeW5jIGFzIHJlc29sdmVTeW5jfSBmcm9tICdyZXNvbHZlJztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJ3BsYXRmb3JtJztcblxuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9hcHBsaWNhdGlvbi9yZWFjdC1yb3V0ZXMvc2VydmVyJztcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi4vYXBwbGljYXRpb24vbGF5b3V0cyc7XG5pbXBvcnQgZ2V0SWRCeVBhdGhuYW1lIGZyb20gJy4uL2FwcGxpY2F0aW9uL3V0aWxzL2dldC1pZC1ieS1wYXRobmFtZSc7XG5pbXBvcnQgbmF2aWdhdGUgZnJvbSAnLi4vYXBwbGljYXRpb24vdXRpbHMvbmF2aWdhdGUnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vYXBwbGljYXRpb24vY29tcG9uZW50cy9jb21tb24vaWNvbic7XG5cbmNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKCk7XG5jb25zdCByZXNvbHZlID0gaWQgPT4gcmVzb2x2ZVN5bmMoaWQsIHtiYXNlZGlyOiBjd2R9KTtcblxuY29uc3QgZ2V0U2NoZW1hID0gcmVxdWlyZShyZXNvbHZlKCdwYXR0ZXJucGxhdGUtc2VydmVyL2xpYnJhcnkvZ2V0LXNjaGVtYScpKTtcbmNvbnN0IGdldE5hdmlnYXRpb24gPSByZXF1aXJlKHJlc29sdmUoJ3BhdHRlcm5wbGF0ZS1zZXJ2ZXIvbGlicmFyeS9nZXQtbmF2aWdhdGlvbicpKTtcbmNvbnN0IGdldFBhdHRlcm5NZXRhRGF0YSA9IHJlcXVpcmUocmVzb2x2ZSgncGF0dGVybnBsYXRlLXNlcnZlci9saWJyYXJ5L2dldC1wYXR0ZXJuLW1ldGEtZGF0YScpKTtcbi8vIGNvbnN0IGdldFBhdHRlcm5Tb3VyY2UgPSByZXF1aXJlKHJlc29sdmUoJ3BhdHRlcm5wbGF0ZS1zZXJ2ZXIvbGlicmFyeS9nZXQtcGF0dGVybi1zb3VyY2UnKSk7XG5cbmNvbnN0IGRlZmF1bHREYXRhID0ge1xuXHRzY2hlbWE6IHt9LFxuXHRuYXZpZ2F0aW9uOiB7fSxcblx0cGF0dGVybnM6IG51bGwsXG5cdG1lc3NhZ2VzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyUGFnZShhcHBsaWNhdGlvbiwgcGFnZVVybCkge1xuXHRjb25zdCBhcHAgPSBhcHBsaWNhdGlvbi5wYXJlbnQ7XG5cdGNvbnN0IGNsaWVudCA9IGFwcGxpY2F0aW9uO1xuXHRjb25zdCBzZXJ2ZXIgPSBhcHAuc2VydmVyO1xuXG5cdGNvbnN0IHBhcnNlZCA9IHVybC5wYXJzZShwYWdlVXJsKTtcblx0Y29uc3QgZGVwdGggPSBwYXJzZWQucGF0aG5hbWUuc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbikubGVuZ3RoO1xuXHRjb25zdCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHBhcnNlZC5xdWVyeSk7XG5cdGNvbnN0IGJhc2UgPSBkZXB0aCA+IDAgPyBBcnJheShkZXB0aCkuZmlsbCgnLi4nKS5qb2luKCcvJykgOiAnLic7XG5cblx0Y29uc3QgaWQgPSBnZXRJZEJ5UGF0aG5hbWUocGFyc2VkLnBhdGhuYW1lKTtcblxuXHRjb25zdCBzY2hlbWEgPSBhcHAgPyBhd2FpdCBnZXRTY2hlbWEoYXBwLCBjbGllbnQsIHNlcnZlcikgOiB7fTtcblx0Y29uc3QgbmF2aWdhdGlvbiA9IGFwcCA/IGF3YWl0IGdldE5hdmlnYXRpb24oYXBwLCBjbGllbnQsIHNlcnZlcikgOiB7fTtcblx0Y29uc3QgcGF0dGVybiA9IG1lcmdlKHt9LCBuYXZpZ2F0ZShpZCwgbmF2aWdhdGlvbikpO1xuXHRjb25zdCBpc1BhdHRlcm4gPSBwYXR0ZXJuICYmIHBhdHRlcm4udHlwZSA9PT0gJ3BhdHRlcm4nO1xuXHQvLyBjb25zdCBzb3VyY2VJZCA9IHF1ZXJ5LnNvdXJjZTtcblxuXHRpZiAoaXNQYXR0ZXJuKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhdHRlcm5EYXRhID0gYXdhaXQgZ2V0UGF0dGVybk1ldGFEYXRhKHNlcnZlciwgaWQpO1xuXHRcdFx0bWVyZ2UocGF0dGVybiwgcGF0dGVybkRhdGEpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRhcHBsaWNhdGlvbi5sb2cuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGNvbmZpZyA9IGFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb24udWk7XG5cdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0dXJsOiBwYWdlVXJsLFxuXHRcdHRpdGxlOiBhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLnVpLnRpdGxlIHx8IHNjaGVtYS5uYW1lLFxuXHRcdHRoZW1lOiBxdWVyeS50aGVtZSB8fCBhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLnVpLnRoZW1lLFxuXHRcdGNvbmZpZ1xuXHR9O1xuXG5cdGNvbnN0IHNlcnZlckRhdGEgPSB7c2NoZW1hLCBuYXZpZ2F0aW9uLCBwYXR0ZXJufTtcblx0Y29uc3QgZGF0YSA9IG1lcmdlKHt9LCBkZWZhdWx0RGF0YSwgb3B0aW9ucy5kYXRhLCBzZXJ2ZXJEYXRhLCB7Y29uZmlnfSwge1xuXHRcdHNjaGVtYToge1xuXHRcdFx0c2VydmVyT3NOYW1lOiBvcy50eXBlKCksXG5cdFx0XHRzZXJ2ZXJPc1ZlcnNpb246IG9zLnJlbGVhc2UoKSxcblx0XHRcdHNlcnZlclJ1bnRpbWVOYW1lOiBwbGF0Zm9ybS5uYW1lLFxuXHRcdFx0c2VydmVyUnVudGltZVZlcnNpb246IHBsYXRmb3JtLnZlcnNpb25cblx0XHR9LFxuXHRcdHN0YXJ0UGF0aG5hbWU6IHBhZ2VVcmwsXG5cdFx0c3RhcnRCYXNlOiBiYXNlXG5cdH0pO1xuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByb3V0ZXIob3B0aW9ucy51cmwsIGRhdGEpO1xuXHRjb25zdCBoZWFkID0gSGVsbWV0LnJld2luZCgpO1xuXHRjb25zdCBpY29ucyA9IEljb24ucmV3aW5kKCk7XG5cblx0cmV0dXJuIGxheW91dCh7XG5cdFx0YXR0cmlidXRlczogaGVhZC5odG1sQXR0cmlidXRlcyxcblx0XHRiYXNlLFxuXHRcdGNvbnRlbnQsXG5cdFx0aWNvbnMsXG5cdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG5cdFx0bGluazogaGVhZC5saW5rLFxuXHRcdG1ldGE6IGhlYWQubWV0YSxcblx0XHRzdHlsZTogaGVhZC5zdHlsZSxcblx0XHR0aXRsZTogaGVhZC50aXRsZSxcblx0XHRzY3JpcHRzOiBbXG5cdFx0XHRgJHtiYXNlfS9zY3JpcHQvdmVuZG9ycy5idW5kbGUuanNgLFxuXHRcdFx0YCR7YmFzZX0vc2NyaXB0L2luZGV4LmJ1bmRsZS5qc2Bcblx0XHRdXG5cdH0pO1xufVxuXG4vKiBhc3luYyBmdW5jdGlvbiBjb25zdW1lRmlsZShpbnB1dCkge1xuXHRpZiAoaXNTdHJlYW0oaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGF3YWl0IHN0cmVhbVRvU3RyaW5nKGlucHV0KTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gc3RyZWFtVG9TdHJpbmcoaW5wdXQpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRjb25zdCBidWZmZXJzID0gW107XG5cdFx0aW5wdXQub24oJ2RhdGEnLCBjaHVuayA9PiBidWZmZXJzLnB1c2goY2h1bmspKTtcblx0XHRpbnB1dC5vbignZW5kJywgKCkgPT4gcmVzb2x2ZShCdWZmZXIuY29uY2F0KGJ1ZmZlcnMpLnRvU3RyaW5nKCkpKTtcblx0XHRpbnB1dC5vbignZXJyb3InLCByZWplY3QpO1xuXHR9KTtcbn0gKi9cbiJdfQ==