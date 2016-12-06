'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _console = require('../../containers/console');

var _console2 = _interopRequireDefault(_console);

var _problem = require('../../containers/problem');

var _problem2 = _interopRequireDefault(_problem);

var _shortcuts = require('../../containers/shortcuts');

var _shortcuts2 = _interopRequireDefault(_shortcuts);

var _navigation = require('../navigation');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = (0, _autobindDecorator2.default)(_class = function (_Component) {
	(0, _inherits3.default)(Application, _Component);

	function Application() {
		(0, _classCallCheck3.default)(this, Application);
		return (0, _possibleConstructorReturn3.default)(this, (Application.__proto__ || (0, _getPrototypeOf2.default)(Application)).apply(this, arguments));
	}

	(0, _createClass3.default)(Application, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			global.addEventListener('resize', this.onResize);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			global.removeEventListener('resize', this.onResize);
		}
	}, {
		key: 'onResize',
		value: function onResize() {
			this.props.onResize({
				width: global.innerWidth,
				height: global.innerHeight
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			var handleSearch = props.onSearch;

			var className = (0, _classnames2.default)('application', {
				'application--menu-enabled': props.menuEnabled,
				'application--theme-loading': props.themeLoading
			});

			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement(_reactHelmet2.default, {
					meta: [{
						name: 'description',
						content: props.description
					}, {
						name: 'viewport',
						content: 'width=device-width, initial-scale=1'
					}],
					link: createLinks(props.styles, { base: props.startBase }),
					title: props.title,
					onChangeClientState: getThemeLoadedListener(props.onThemeLoaded)
				}),
				_react2.default.createElement(_navigation2.default, {
					activePattern: props.activePattern,
					base: props.base,
					enabled: props.menuEnabled,
					expanded: props.expanded,
					hierarchy: props.hierarchy,
					hide: props.hide,
					icon: 'patternplate',
					menuEnabled: props.menuEnabled,
					navigation: props.navigation,
					onSearch: handleSearch,
					onThemeChange: props.onThemeChange,
					pathname: props.pathname,
					query: props.query,
					requestSearchBlur: props.requestSearchBlur,
					searchValue: props.search,
					theme: props.theme,
					title: props.title,
					version: props.version
				}),
				_react2.default.createElement(
					'main',
					{ className: 'application__content' },
					props.children
				),
				props.lightbox === 'console' && _react2.default.createElement(_console2.default, null),
				props.lightbox === 'shortcuts' && _react2.default.createElement(_shortcuts2.default, null),
				props.issue && _react2.default.createElement(_problem2.default, null)
			);
		}
	}]);
	return Application;
}(_react.Component)) || _class;

exports.default = Application;


Application.propTypes = {
	activePattern: _react.PropTypes.string.isRequired,
	base: _react.PropTypes.string.isRequired,
	children: _react.PropTypes.any,
	description: _react.PropTypes.string.isRequired,
	expanded: _react.PropTypes.bool.isRequired,
	hierarchy: _react.PropTypes.object.isRequired,
	hide: _react.PropTypes.bool.isRequired,
	issue: _react.PropTypes.bool.isRequired,
	lightbox: _react.PropTypes.string,
	menuEnabled: _react.PropTypes.bool.isRequired,
	navigation: _react.PropTypes.object.isRequired,
	onResize: _react.PropTypes.func.isRequired,
	onSearch: _react.PropTypes.func.isRequired,
	onThemeLoaded: _react.PropTypes.func.isRequired,
	onThemeChange: _react.PropTypes.func.isRequired,
	pathname: _react.PropTypes.string.isRequired,
	query: _react.PropTypes.object.isRequired,
	requestSearchBlur: _react.PropTypes.func.isRequired,
	theme: _react.PropTypes.string.isRequired,
	title: _react.PropTypes.string.isRequired,
	version: _react.PropTypes.string.isRequired,
	search: _react.PropTypes.string,
	styles: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
	themeLoading: _react.PropTypes.bool.isRequired
};

function createLinks(styles, options) {
	return styles.map(createStyle(options));
}

function createStyle(options) {
	return function (style) {
		return {
			'rel': 'stylesheet',
			'href': options.base + '/style/' + style + '.css',
			'data-style-id': style
		};
	};
}

function getThemeLoadedListener(fn) {
	return function () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _args$1$linkTags = args[1].linkTags,
		    added = _args$1$linkTags === undefined ? [] : _args$1$linkTags;

		var tags = added.filter(function (tag) {
			return tag.rel === 'stylesheet';
		});
		var tag = tags[tags.length - 1];
		if (tag) {
			tag.onload = function () {
				fn(tag.dataset.styleId);
			};
		}
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uIiwiZ2xvYmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByb3BzIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJoYW5kbGVTZWFyY2giLCJvblNlYXJjaCIsImNsYXNzTmFtZSIsIm1lbnVFbmFibGVkIiwidGhlbWVMb2FkaW5nIiwibmFtZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUxpbmtzIiwic3R5bGVzIiwiYmFzZSIsInN0YXJ0QmFzZSIsInRpdGxlIiwiZ2V0VGhlbWVMb2FkZWRMaXN0ZW5lciIsIm9uVGhlbWVMb2FkZWQiLCJhY3RpdmVQYXR0ZXJuIiwiZXhwYW5kZWQiLCJoaWVyYXJjaHkiLCJoaWRlIiwibmF2aWdhdGlvbiIsIm9uVGhlbWVDaGFuZ2UiLCJwYXRobmFtZSIsInF1ZXJ5IiwicmVxdWVzdFNlYXJjaEJsdXIiLCJzZWFyY2giLCJ0aGVtZSIsInZlcnNpb24iLCJjaGlsZHJlbiIsImxpZ2h0Ym94IiwiaXNzdWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYW55IiwiYm9vbCIsIm9iamVjdCIsImZ1bmMiLCJhcnJheU9mIiwib3B0aW9ucyIsIm1hcCIsImNyZWF0ZVN0eWxlIiwic3R5bGUiLCJmbiIsImFyZ3MiLCJsaW5rVGFncyIsImFkZGVkIiwidGFncyIsImZpbHRlciIsInRhZyIsInJlbCIsImxlbmd0aCIsIm9ubG9hZCIsImRhdGFzZXQiLCJzdHlsZUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJ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QU4sQ0FBYTtBQUFBLFVBQU9DLElBQUlDLEdBQUosS0FBWSxZQUFuQjtBQUFBLEdBQWIsQ0FBYjtBQUNBLE1BQU1ELE1BQU1GLEtBQUtBLEtBQUtJLE1BQUwsR0FBYyxDQUFuQixDQUFaO0FBQ0EsTUFBSUYsR0FBSixFQUFTO0FBQ1JBLE9BQUlHLE1BQUosR0FBYSxZQUFNO0FBQ2xCVCxPQUFHTSxJQUFJSSxPQUFKLENBQVlDLE9BQWY7QUFDQSxJQUZEO0FBR0E7QUFDRCxFQVREO0FBVUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCBqb2luIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5pbXBvcnQgQ29uc29sZUxpZ2h0Ym94IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvY29uc29sZSc7XG5pbXBvcnQgUHJvYmxlbUxpZ2h0Ym94IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvcHJvYmxlbSc7XG5pbXBvcnQgU2hvcnRjdXRzTGlnaHRib3ggZnJvbSAnLi4vLi4vY29udGFpbmVycy9zaG9ydGN1dHMnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbmF2aWdhdGlvbic7XG5cbkBhdXRvYmluZFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRnbG9iYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSk7XG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnByb3BzLm9uUmVzaXplKHtcblx0XHRcdHdpZHRoOiBnbG9iYWwuaW5uZXJXaWR0aCxcblx0XHRcdGhlaWdodDogZ2xvYmFsLmlubmVySGVpZ2h0XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0Y29uc3QgaGFuZGxlU2VhcmNoID0gcHJvcHMub25TZWFyY2g7XG5cblx0XHRjb25zdCBjbGFzc05hbWUgPSBqb2luKCdhcHBsaWNhdGlvbicsIHtcblx0XHRcdCdhcHBsaWNhdGlvbi0tbWVudS1lbmFibGVkJzogcHJvcHMubWVudUVuYWJsZWQsXG5cdFx0XHQnYXBwbGljYXRpb24tLXRoZW1lLWxvYWRpbmcnOiBwcm9wcy50aGVtZUxvYWRpbmdcblx0XHR9KTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cblx0XHRcdFx0PEhlbG1ldFxuXHRcdFx0XHRcdG1ldGE9e1tcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bmFtZTogJ2Rlc2NyaXB0aW9uJyxcblx0XHRcdFx0XHRcdFx0Y29udGVudDogcHJvcHMuZGVzY3JpcHRpb25cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG5hbWU6ICd2aWV3cG9ydCcsXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdfVxuXHRcdFx0XHRcdGxpbms9e2NyZWF0ZUxpbmtzKHByb3BzLnN0eWxlcywge2Jhc2U6IHByb3BzLnN0YXJ0QmFzZX0pfVxuXHRcdFx0XHRcdHRpdGxlPXtwcm9wcy50aXRsZX1cblx0XHRcdFx0XHRvbkNoYW5nZUNsaWVudFN0YXRlPXtnZXRUaGVtZUxvYWRlZExpc3RlbmVyKHByb3BzLm9uVGhlbWVMb2FkZWQpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDxOYXZpZ2F0aW9uXG5cdFx0XHRcdFx0YWN0aXZlUGF0dGVybj17cHJvcHMuYWN0aXZlUGF0dGVybn1cblx0XHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRcdGVuYWJsZWQ9e3Byb3BzLm1lbnVFbmFibGVkfVxuXHRcdFx0XHRcdGV4cGFuZGVkPXtwcm9wcy5leHBhbmRlZH1cblx0XHRcdFx0XHRoaWVyYXJjaHk9e3Byb3BzLmhpZXJhcmNoeX1cblx0XHRcdFx0XHRoaWRlPXtwcm9wcy5oaWRlfVxuXHRcdFx0XHRcdGljb249XCJwYXR0ZXJucGxhdGVcIlxuXHRcdFx0XHRcdG1lbnVFbmFibGVkPXtwcm9wcy5tZW51RW5hYmxlZH1cblx0XHRcdFx0XHRuYXZpZ2F0aW9uPXtwcm9wcy5uYXZpZ2F0aW9ufVxuXHRcdFx0XHRcdG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9XG5cdFx0XHRcdFx0b25UaGVtZUNoYW5nZT17cHJvcHMub25UaGVtZUNoYW5nZX1cblx0XHRcdFx0XHRwYXRobmFtZT17cHJvcHMucGF0aG5hbWV9XG5cdFx0XHRcdFx0cXVlcnk9e3Byb3BzLnF1ZXJ5fVxuXHRcdFx0XHRcdHJlcXVlc3RTZWFyY2hCbHVyPXtwcm9wcy5yZXF1ZXN0U2VhcmNoQmx1cn1cblx0XHRcdFx0XHRzZWFyY2hWYWx1ZT17cHJvcHMuc2VhcmNofVxuXHRcdFx0XHRcdHRoZW1lPXtwcm9wcy50aGVtZX1cblx0XHRcdFx0XHR0aXRsZT17cHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0dmVyc2lvbj17cHJvcHMudmVyc2lvbn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJhcHBsaWNhdGlvbl9fY29udGVudFwiPlxuXHRcdFx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9tYWluPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvcHMubGlnaHRib3ggPT09ICdjb25zb2xlJyAmJlxuXHRcdFx0XHRcdFx0PENvbnNvbGVMaWdodGJveC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3BzLmxpZ2h0Ym94ID09PSAnc2hvcnRjdXRzJyAmJlxuXHRcdFx0XHRcdFx0PFNob3J0Y3V0c0xpZ2h0Ym94Lz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvcHMuaXNzdWUgJiZcblx0XHRcdFx0XHRcdDxQcm9ibGVtTGlnaHRib3gvPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkFwcGxpY2F0aW9uLnByb3BUeXBlcyA9IHtcblx0YWN0aXZlUGF0dGVybjogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0YmFzZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y2hpbGRyZW46IHQuYW55LFxuXHRkZXNjcmlwdGlvbjogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0ZXhwYW5kZWQ6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRoaWVyYXJjaHk6IHQub2JqZWN0LmlzUmVxdWlyZWQsXG5cdGhpZGU6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRpc3N1ZTogdC5ib29sLmlzUmVxdWlyZWQsXG5cdGxpZ2h0Ym94OiB0LnN0cmluZyxcblx0bWVudUVuYWJsZWQ6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRuYXZpZ2F0aW9uOiB0Lm9iamVjdC5pc1JlcXVpcmVkLFxuXHRvblJlc2l6ZTogdC5mdW5jLmlzUmVxdWlyZWQsXG5cdG9uU2VhcmNoOiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0b25UaGVtZUxvYWRlZDogdC5mdW5jLmlzUmVxdWlyZWQsXG5cdG9uVGhlbWVDaGFuZ2U6IHQuZnVuYy5pc1JlcXVpcmVkLFxuXHRwYXRobmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0cXVlcnk6IHQub2JqZWN0LmlzUmVxdWlyZWQsXG5cdHJlcXVlc3RTZWFyY2hCbHVyOiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0dGhlbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHRpdGxlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHR2ZXJzaW9uOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRzZWFyY2g6IHQuc3RyaW5nLFxuXHRzdHlsZXM6IHQuYXJyYXlPZih0LnN0cmluZykuaXNSZXF1aXJlZCxcblx0dGhlbWVMb2FkaW5nOiB0LmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZnVuY3Rpb24gY3JlYXRlTGlua3Moc3R5bGVzLCBvcHRpb25zKSB7XG5cdHJldHVybiBzdHlsZXMubWFwKGNyZWF0ZVN0eWxlKG9wdGlvbnMpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGUob3B0aW9ucykge1xuXHRyZXR1cm4gc3R5bGUgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHQncmVsJzogJ3N0eWxlc2hlZXQnLFxuXHRcdFx0J2hyZWYnOiBgJHtvcHRpb25zLmJhc2V9L3N0eWxlLyR7c3R5bGV9LmNzc2AsXG5cdFx0XHQnZGF0YS1zdHlsZS1pZCc6IHN0eWxlXG5cdFx0fTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0VGhlbWVMb2FkZWRMaXN0ZW5lcihmbikge1xuXHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcblx0XHRjb25zdCBbLCB7bGlua1RhZ3M6IGFkZGVkID0gW119XSA9IGFyZ3M7XG5cdFx0Y29uc3QgdGFncyA9IGFkZGVkLmZpbHRlcih0YWcgPT4gdGFnLnJlbCA9PT0gJ3N0eWxlc2hlZXQnKTtcblx0XHRjb25zdCB0YWcgPSB0YWdzW3RhZ3MubGVuZ3RoIC0gMV07XG5cdFx0aWYgKHRhZykge1xuXHRcdFx0dGFnLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdFx0Zm4odGFnLmRhdGFzZXQuc3R5bGVJZCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcbn1cbiJdfQ==