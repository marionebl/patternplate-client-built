'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _navigationItem = require('./navigation-item');

var _navigationItem2 = _interopRequireDefault(_navigationItem);

var _augmentHierarchy = require('../../utils/augment-hierarchy');

var _augmentHierarchy2 = _interopRequireDefault(_augmentHierarchy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationTree = (0, _pureRenderDecorator2.default)(_class = (_temp2 = _class2 = function (_Component) {
	(0, _inherits3.default)(NavigationTree, _Component);

	function NavigationTree() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, NavigationTree);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NavigationTree.__proto__ || (0, _getPrototypeOf2.default)(NavigationTree)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'NavigationTree', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(NavigationTree, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var props = this.props;

			var _getAugmentedChildren = (0, _augmentHierarchy2.default)(props.data, props.hierarchy),
			    folders = _getAugmentedChildren.folders,
			    patterns = _getAugmentedChildren.patterns;

			return _react2.default.createElement(
				_reactAddonsCssTransitionGroup2.default,
				{
					component: 'ul',
					className: 'navigation-tree',
					transitionName: 'pattern-content-transition',
					transitionEnterTimeout: 300,
					transitionLeaveTimeout: 300
				},
				props.children,
				folders.map(function (folder) {
					var active = props.activePattern.startsWith(folder.id);

					return _react2.default.createElement(
						_navigationItem2.default,
						{
							active: active || folder.expanded,
							base: props.base,
							id: folder.id,
							key: folder.id,
							name: folder.displayName,
							onClick: _this2.handleFolderClick,
							query: props.query,
							searchQuery: props.searchQuery,
							symbol: folder.icon,
							symbolActive: folder.iconActive,
							type: 'directory',
							hide: props.hide
						},
						_react2.default.createElement(NavigationTree, {
							activePattern: props.activePattern,
							base: props.base,
							data: folder.children,
							hierarchy: props.hierarchy,
							id: folder.id,
							query: props.query,
							searchQuery: props.searchQuery,
							hide: props.hide
						})
					);
				}),
				patterns.map(function (pattern) {
					var displayName = pattern.displayName,
					    expanded = pattern.expanded,
					    type = pattern.type,
					    manifest = pattern.manifest;
					var _manifest$options = manifest.options,
					    options = _manifest$options === undefined ? {} : _manifest$options;
					var _options$hidden = options.hidden,
					    hidden = _options$hidden === undefined ? false : _options$hidden;

					var hideItem = props.hide ? hidden : false;

					return _react2.default.createElement(_navigationItem2.default, {
						active: props.activePattern === pattern.id || expanded,
						base: props.base,
						hidden: hideItem,
						id: pattern.id,
						key: pattern.id,
						name: displayName,
						query: props.query,
						ref: _this2.getActiveReference,
						searchQuery: props.searchQuery,
						symbol: type,
						type: type,
						hide: props.hide
					});
				})
			);
		}
	}]);
	return NavigationTree;
}(_react.Component), _class2.propTypes = {
	id: _react.PropTypes.string,
	activePattern: _react.PropTypes.string,
	base: _react.PropTypes.string.isRequired,
	data: _react.PropTypes.object,
	hide: _react.PropTypes.bool.isRequired,
	query: _react.PropTypes.object.isRequired,
	searchQuery: _react.PropTypes.string,
	children: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.arrayOf(_react.PropTypes.node)]),
	config: _react.PropTypes.object,
	hierarchy: _react.PropTypes.object
}, _temp2)) || _class;

exports.default = NavigationTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi10cmVlLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25UcmVlIiwiZGlzcGxheU5hbWUiLCJwcm9wcyIsImRhdGEiLCJoaWVyYXJjaHkiLCJmb2xkZXJzIiwicGF0dGVybnMiLCJjaGlsZHJlbiIsIm1hcCIsImFjdGl2ZSIsImFjdGl2ZVBhdHRlcm4iLCJzdGFydHNXaXRoIiwiZm9sZGVyIiwiaWQiLCJleHBhbmRlZCIsImJhc2UiLCJoYW5kbGVGb2xkZXJDbGljayIsInF1ZXJ5Iiwic2VhcmNoUXVlcnkiLCJpY29uIiwiaWNvbkFjdGl2ZSIsImhpZGUiLCJwYXR0ZXJuIiwidHlwZSIsIm1hbmlmZXN0Iiwib3B0aW9ucyIsImhpZGRlbiIsImhpZGVJdGVtIiwiZ2V0QWN0aXZlUmVmZXJlbmNlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImJvb2wiLCJvbmVPZlR5cGUiLCJub2RlIiwiYXJyYXlPZiIsImNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztJQUdNQSxjOzs7Ozs7Ozs7Ozs7OzswTkFDTEMsVyxHQUFjLGdCOzs7OzsyQkFrQkw7QUFBQTs7QUFBQSxPQUNEQyxLQURDLEdBQ1EsSUFEUixDQUNEQSxLQURDOztBQUFBLCtCQUVvQixnQ0FBcUJBLE1BQU1DLElBQTNCLEVBQWlDRCxNQUFNRSxTQUF2QyxDQUZwQjtBQUFBLE9BRURDLE9BRkMseUJBRURBLE9BRkM7QUFBQSxPQUVRQyxRQUZSLHlCQUVRQSxRQUZSOztBQUlSLFVBQ0M7QUFBQTtBQUFBO0FBQ0MsZ0JBQVUsSUFEWDtBQUVDLGdCQUFVLGlCQUZYO0FBR0MscUJBQWUsNEJBSGhCO0FBSUMsNkJBQXdCLEdBSnpCO0FBS0MsNkJBQXdCO0FBTHpCO0FBT0VKLFVBQU1LLFFBUFI7QUFTRUYsWUFBUUcsR0FBUixDQUFZLGtCQUFVO0FBQ3JCLFNBQU1DLFNBQVNQLE1BQU1RLGFBQU4sQ0FBb0JDLFVBQXBCLENBQStCQyxPQUFPQyxFQUF0QyxDQUFmOztBQUVBLFlBQ0M7QUFBQTtBQUFBO0FBQ0MsZUFBUUosVUFBVUcsT0FBT0UsUUFEMUI7QUFFQyxhQUFNWixNQUFNYSxJQUZiO0FBR0MsV0FBSUgsT0FBT0MsRUFIWjtBQUlDLFlBQUtELE9BQU9DLEVBSmI7QUFLQyxhQUFNRCxPQUFPWCxXQUxkO0FBTUMsZ0JBQVMsT0FBS2UsaUJBTmY7QUFPQyxjQUFPZCxNQUFNZSxLQVBkO0FBUUMsb0JBQWFmLE1BQU1nQixXQVJwQjtBQVNDLGVBQVFOLE9BQU9PLElBVGhCO0FBVUMscUJBQWNQLE9BQU9RLFVBVnRCO0FBV0MsYUFBSyxXQVhOO0FBWUMsYUFBTWxCLE1BQU1tQjtBQVpiO0FBY0Msb0NBQUMsY0FBRDtBQUNDLHNCQUFlbkIsTUFBTVEsYUFEdEI7QUFFQyxhQUFNUixNQUFNYSxJQUZiO0FBR0MsYUFBTUgsT0FBT0wsUUFIZDtBQUlDLGtCQUFXTCxNQUFNRSxTQUpsQjtBQUtDLFdBQUlRLE9BQU9DLEVBTFo7QUFNQyxjQUFPWCxNQUFNZSxLQU5kO0FBT0Msb0JBQWFmLE1BQU1nQixXQVBwQjtBQVFDLGFBQU1oQixNQUFNbUI7QUFSYjtBQWRELE1BREQ7QUEyQkEsS0E5QkQsQ0FURjtBQTBDRWYsYUFBU0UsR0FBVCxDQUFhLG1CQUFXO0FBQUEsU0FFdEJQLFdBRnNCLEdBTW5CcUIsT0FObUIsQ0FFdEJyQixXQUZzQjtBQUFBLFNBR3RCYSxRQUhzQixHQU1uQlEsT0FObUIsQ0FHdEJSLFFBSHNCO0FBQUEsU0FJdEJTLElBSnNCLEdBTW5CRCxPQU5tQixDQUl0QkMsSUFKc0I7QUFBQSxTQUt0QkMsUUFMc0IsR0FNbkJGLE9BTm1CLENBS3RCRSxRQUxzQjtBQUFBLDZCQVFBQSxRQVJBLENBUWhCQyxPQVJnQjtBQUFBLFNBUWhCQSxPQVJnQixxQ0FRTixFQVJNO0FBQUEsMkJBU0VBLE9BVEYsQ0FTaEJDLE1BVGdCO0FBQUEsU0FTaEJBLE1BVGdCLG1DQVNQLEtBVE87O0FBVXZCLFNBQU1DLFdBQVd6QixNQUFNbUIsSUFBTixHQUFhSyxNQUFiLEdBQXNCLEtBQXZDOztBQUVBLFlBQ0M7QUFDQyxjQUFReEIsTUFBTVEsYUFBTixLQUF3QlksUUFBUVQsRUFBaEMsSUFBc0NDLFFBRC9DO0FBRUMsWUFBTVosTUFBTWEsSUFGYjtBQUdDLGNBQVFZLFFBSFQ7QUFJQyxVQUFJTCxRQUFRVCxFQUpiO0FBS0MsV0FBS1MsUUFBUVQsRUFMZDtBQU1DLFlBQU1aLFdBTlA7QUFPQyxhQUFPQyxNQUFNZSxLQVBkO0FBUUMsV0FBSyxPQUFLVyxrQkFSWDtBQVNDLG1CQUFhMUIsTUFBTWdCLFdBVHBCO0FBVUMsY0FBUUssSUFWVDtBQVdDLFlBQU1BLElBWFA7QUFZQyxZQUFNckIsTUFBTW1CO0FBWmIsT0FERDtBQWdCQSxLQTVCRDtBQTFDRixJQUREO0FBMkVBOzs7NkJBL0ZNUSxTLEdBQVk7QUFDbEJoQixLQUFJLGlCQUFNaUIsTUFEUTtBQUVsQnBCLGdCQUFlLGlCQUFNb0IsTUFGSDtBQUdsQmYsT0FBTSxpQkFBTWUsTUFBTixDQUFhQyxVQUhEO0FBSWxCNUIsT0FBTSxpQkFBTTZCLE1BSk07QUFLbEJYLE9BQU0saUJBQU1ZLElBQU4sQ0FBV0YsVUFMQztBQU1sQmQsUUFBTyxpQkFBTWUsTUFBTixDQUFhRCxVQU5GO0FBT2xCYixjQUFhLGlCQUFNWSxNQVBEO0FBUWxCdkIsV0FBVSxpQkFBTTJCLFNBQU4sQ0FBZ0IsQ0FDekIsaUJBQU1DLElBRG1CLEVBRXpCLGlCQUFNQyxPQUFOLENBQWMsaUJBQU1ELElBQXBCLENBRnlCLENBQWhCLENBUlE7QUFZbEJFLFNBQVEsaUJBQU1MLE1BWkk7QUFhbEI1QixZQUFXLGlCQUFNNEI7QUFiQyxDOztrQkFrR0xoQyxjIiwiZmlsZSI6Im5hdmlnYXRpb24tdHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHVyZSBmcm9tICdwdXJlLXJlbmRlci1kZWNvcmF0b3InO1xuaW1wb3J0IENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbkl0ZW0gZnJvbSAnLi9uYXZpZ2F0aW9uLWl0ZW0nO1xuaW1wb3J0IGdldEF1Z21lbnRlZENoaWxkcmVuIGZyb20gJy4uLy4uL3V0aWxzL2F1Z21lbnQtaGllcmFyY2h5JztcblxuQHB1cmVcbmNsYXNzIE5hdmlnYXRpb25UcmVlIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0ZGlzcGxheU5hbWUgPSAnTmF2aWdhdGlvblRyZWUnO1xuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0aWQ6IHR5cGVzLnN0cmluZyxcblx0XHRhY3RpdmVQYXR0ZXJuOiB0eXBlcy5zdHJpbmcsXG5cdFx0YmFzZTogdHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0ZGF0YTogdHlwZXMub2JqZWN0LFxuXHRcdGhpZGU6IHR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblx0XHRxdWVyeTogdHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cdFx0c2VhcmNoUXVlcnk6IHR5cGVzLnN0cmluZyxcblx0XHRjaGlsZHJlbjogdHlwZXMub25lT2ZUeXBlKFtcblx0XHRcdHR5cGVzLm5vZGUsXG5cdFx0XHR0eXBlcy5hcnJheU9mKHR5cGVzLm5vZGUpXG5cdFx0XSksXG5cdFx0Y29uZmlnOiB0eXBlcy5vYmplY3QsXG5cdFx0aGllcmFyY2h5OiB0eXBlcy5vYmplY3Rcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0Y29uc3Qge2ZvbGRlcnMsIHBhdHRlcm5zfSA9IGdldEF1Z21lbnRlZENoaWxkcmVuKHByb3BzLmRhdGEsIHByb3BzLmhpZXJhcmNoeSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PENTU1RyYW5zaXRpb25Hcm91cFxuXHRcdFx0XHRjb21wb25lbnQ9XCJ1bFwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tdHJlZVwiXG5cdFx0XHRcdHRyYW5zaXRpb25OYW1lPVwicGF0dGVybi1jb250ZW50LXRyYW5zaXRpb25cIlxuXHRcdFx0XHR0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXszMDB9XG5cdFx0XHRcdHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezMwMH1cblx0XHRcdFx0PlxuXHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRmb2xkZXJzLm1hcChmb2xkZXIgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgYWN0aXZlID0gcHJvcHMuYWN0aXZlUGF0dGVybi5zdGFydHNXaXRoKGZvbGRlci5pZCk7XG5cblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxOYXZpZ2F0aW9uSXRlbVxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlIHx8IGZvbGRlci5leHBhbmRlZH1cblx0XHRcdFx0XHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRcdFx0XHRcdGlkPXtmb2xkZXIuaWR9XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtmb2xkZXIuaWR9XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT17Zm9sZGVyLmRpc3BsYXlOYW1lfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlRm9sZGVyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0cXVlcnk9e3Byb3BzLnF1ZXJ5fVxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaFF1ZXJ5PXtwcm9wcy5zZWFyY2hRdWVyeX1cblx0XHRcdFx0XHRcdFx0XHRzeW1ib2w9e2ZvbGRlci5pY29ufVxuXHRcdFx0XHRcdFx0XHRcdHN5bWJvbEFjdGl2ZT17Zm9sZGVyLmljb25BY3RpdmV9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImRpcmVjdG9yeVwiXG5cdFx0XHRcdFx0XHRcdFx0aGlkZT17cHJvcHMuaGlkZX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PE5hdmlnYXRpb25UcmVlXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVQYXR0ZXJuPXtwcm9wcy5hY3RpdmVQYXR0ZXJufVxuXHRcdFx0XHRcdFx0XHRcdFx0YmFzZT17cHJvcHMuYmFzZX1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2ZvbGRlci5jaGlsZHJlbn1cblx0XHRcdFx0XHRcdFx0XHRcdGhpZXJhcmNoeT17cHJvcHMuaGllcmFyY2h5fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2ZvbGRlci5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdHF1ZXJ5PXtwcm9wcy5xdWVyeX1cblx0XHRcdFx0XHRcdFx0XHRcdHNlYXJjaFF1ZXJ5PXtwcm9wcy5zZWFyY2hRdWVyeX1cblx0XHRcdFx0XHRcdFx0XHRcdGhpZGU9e3Byb3BzLmhpZGV9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L05hdmlnYXRpb25JdGVtPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYXR0ZXJucy5tYXAocGF0dGVybiA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXlOYW1lLFxuXHRcdFx0XHRcdFx0XHRleHBhbmRlZCxcblx0XHRcdFx0XHRcdFx0dHlwZSxcblx0XHRcdFx0XHRcdFx0bWFuaWZlc3Rcblx0XHRcdFx0XHRcdH0gPSBwYXR0ZXJuO1xuXG5cdFx0XHRcdFx0XHRjb25zdCB7b3B0aW9ucyA9IHt9fSA9IG1hbmlmZXN0O1xuXHRcdFx0XHRcdFx0Y29uc3Qge2hpZGRlbiA9IGZhbHNlfSA9IG9wdGlvbnM7XG5cdFx0XHRcdFx0XHRjb25zdCBoaWRlSXRlbSA9IHByb3BzLmhpZGUgPyBoaWRkZW4gOiBmYWxzZTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PE5hdmlnYXRpb25JdGVtXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXtwcm9wcy5hY3RpdmVQYXR0ZXJuID09PSBwYXR0ZXJuLmlkIHx8IGV4cGFuZGVkfVxuXHRcdFx0XHRcdFx0XHRcdGJhc2U9e3Byb3BzLmJhc2V9XG5cdFx0XHRcdFx0XHRcdFx0aGlkZGVuPXtoaWRlSXRlbX1cblx0XHRcdFx0XHRcdFx0XHRpZD17cGF0dGVybi5pZH1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e3BhdHRlcm4uaWR9XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT17ZGlzcGxheU5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0cXVlcnk9e3Byb3BzLnF1ZXJ5fVxuXHRcdFx0XHRcdFx0XHRcdHJlZj17dGhpcy5nZXRBY3RpdmVSZWZlcmVuY2V9XG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoUXVlcnk9e3Byb3BzLnNlYXJjaFF1ZXJ5fVxuXHRcdFx0XHRcdFx0XHRcdHN5bWJvbD17dHlwZX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPXt0eXBlfVxuXHRcdFx0XHRcdFx0XHRcdGhpZGU9e3Byb3BzLmhpZGV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L0NTU1RyYW5zaXRpb25Hcm91cD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25UcmVlO1xuIl19