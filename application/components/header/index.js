'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Header;


function Header(props) {
	var to = { pathname: props.base, query: props.query };
	var enabledTo = {
		pathname: props.pathname,
		query: (0, _extends3.default)({}, props.query, {
			'menu-enabled': !props.menuEnabled
		})
	};

	return _react2.default.createElement(
		'header',
		{ className: 'main-header application__header' },
		_react2.default.createElement(
			_reactRouter.IndexLink,
			{
				to: to,
				title: 'Navigate to documentation [ctrl+d]',
				className: 'logo'
			},
			_react2.default.createElement(
				_icon2.default,
				{
					symbol: props.icon,
					fallback: false
				},
				props.title
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'toolbar' },
			_react2.default.createElement(
				_reactRouter.Link,
				{
					className: 'menu',
					to: enabledTo
				},
				_react2.default.createElement(
					_icon2.default,
					{
						base: props.base,
						symbol: 'patternplate',
						fallback: false
					},
					props.menuEnabled ? 'Disable Menu' : 'Enable Menu'
				)
			)
		)
	);
}

Header.propTypes = {
	base: _react.PropTypes.string.isRequired,
	icon: _react.PropTypes.string.isRequired,
	menuEnabled: _react.PropTypes.bool.isRequired,
	pathname: _react.PropTypes.string.isRequired,
	query: _react.PropTypes.object.isRequired,
	title: _react.PropTypes.string.isRequired,
	version: _react.PropTypes.string.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInRvIiwicGF0aG5hbWUiLCJiYXNlIiwicXVlcnkiLCJlbmFibGVkVG8iLCJtZW51RW5hYmxlZCIsImljb24iLCJ0aXRsZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIiwib2JqZWN0IiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7Ozs7OztrQkFFZUEsTTs7O0FBRWYsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDdEIsS0FBTUMsS0FBSyxFQUFDQyxVQUFVRixNQUFNRyxJQUFqQixFQUF1QkMsT0FBT0osTUFBTUksS0FBcEMsRUFBWDtBQUNBLEtBQU1DLFlBQVk7QUFDakJILFlBQVVGLE1BQU1FLFFBREM7QUFFakJFLG9DQUNJSixNQUFNSSxLQURWO0FBRUMsbUJBQWdCLENBQUNKLE1BQU1NO0FBRnhCO0FBRmlCLEVBQWxCOztBQVFBLFFBQ0M7QUFBQTtBQUFBLElBQVEsV0FBVSxpQ0FBbEI7QUFDQztBQUFBO0FBQUE7QUFDQyxRQUFJTCxFQURMO0FBRUMsV0FBTSxvQ0FGUDtBQUdDLGVBQVU7QUFIWDtBQUtDO0FBQUE7QUFBQTtBQUNDLGFBQVFELE1BQU1PLElBRGY7QUFFQyxlQUFVO0FBRlg7QUFJRVAsVUFBTVE7QUFKUjtBQUxELEdBREQ7QUFhQztBQUFBO0FBQUEsS0FBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUE7QUFDQyxnQkFBVSxNQURYO0FBRUMsU0FBSUg7QUFGTDtBQUlDO0FBQUE7QUFBQTtBQUNDLFlBQU1MLE1BQU1HLElBRGI7QUFFQyxjQUFPLGNBRlI7QUFHQyxnQkFBVTtBQUhYO0FBTUVILFdBQU1NLFdBQU4sR0FDQyxjQURELEdBRUM7QUFSSDtBQUpEO0FBREQ7QUFiRCxFQUREO0FBa0NBOztBQUVEUCxPQUFPVSxTQUFQLEdBQW1CO0FBQ2xCTixPQUFNLGlCQUFFTyxNQUFGLENBQVNDLFVBREc7QUFFbEJKLE9BQU0saUJBQUVHLE1BQUYsQ0FBU0MsVUFGRztBQUdsQkwsY0FBYSxpQkFBRU0sSUFBRixDQUFPRCxVQUhGO0FBSWxCVCxXQUFVLGlCQUFFUSxNQUFGLENBQVNDLFVBSkQ7QUFLbEJQLFFBQU8saUJBQUVTLE1BQUYsQ0FBU0YsVUFMRTtBQU1sQkgsUUFBTyxpQkFBRUUsTUFBRixDQUFTQyxVQU5FO0FBT2xCRyxVQUFTLGlCQUFFSixNQUFGLENBQVNDO0FBUEEsQ0FBbkIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rLCBJbmRleExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBJY29uIGZyb20gJy4uL2NvbW1vbi9pY29uJztcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcblx0Y29uc3QgdG8gPSB7cGF0aG5hbWU6IHByb3BzLmJhc2UsIHF1ZXJ5OiBwcm9wcy5xdWVyeX07XG5cdGNvbnN0IGVuYWJsZWRUbyA9IHtcblx0XHRwYXRobmFtZTogcHJvcHMucGF0aG5hbWUsXG5cdFx0cXVlcnk6IHtcblx0XHRcdC4uLnByb3BzLnF1ZXJ5LFxuXHRcdFx0J21lbnUtZW5hYmxlZCc6ICFwcm9wcy5tZW51RW5hYmxlZFxuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXIgYXBwbGljYXRpb25fX2hlYWRlclwiPlxuXHRcdFx0PEluZGV4TGlua1xuXHRcdFx0XHR0bz17dG99XG5cdFx0XHRcdHRpdGxlPVwiTmF2aWdhdGUgdG8gZG9jdW1lbnRhdGlvbiBbY3RybCtkXVwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cImxvZ29cIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdDxJY29uXG5cdFx0XHRcdFx0c3ltYm9sPXtwcm9wcy5pY29ufVxuXHRcdFx0XHRcdGZhbGxiYWNrPXtmYWxzZX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3Byb3BzLnRpdGxlfVxuXHRcdFx0XHQ8L0ljb24+XG5cdFx0XHQ8L0luZGV4TGluaz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhclwiPlxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1lbnVcIlxuXHRcdFx0XHRcdHRvPXtlbmFibGVkVG99XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdDxJY29uXG5cdFx0XHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRcdFx0c3ltYm9sPVwicGF0dGVybnBsYXRlXCJcblx0XHRcdFx0XHRcdGZhbGxiYWNrPXtmYWxzZX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cHJvcHMubWVudUVuYWJsZWQgP1xuXHRcdFx0XHRcdFx0XHRcdCdEaXNhYmxlIE1lbnUnIDpcblx0XHRcdFx0XHRcdFx0XHQnRW5hYmxlIE1lbnUnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9JY29uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn1cblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcblx0YmFzZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0aWNvbjogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0bWVudUVuYWJsZWQ6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRwYXRobmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0cXVlcnk6IHQub2JqZWN0LmlzUmVxdWlyZWQsXG5cdHRpdGxlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHR2ZXJzaW9uOiB0LnN0cmluZy5pc1JlcXVpcmVkXG59O1xuIl19