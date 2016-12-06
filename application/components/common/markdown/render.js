'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _github = require('hast-util-sanitize/lib/github');

var _github2 = _interopRequireDefault(_github);

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _remark = require('remark');

var _remark2 = _interopRequireDefault(_remark);

var _remarkGemojiToEmoji = require('remark-gemoji-to-emoji');

var _remarkGemojiToEmoji2 = _interopRequireDefault(_remarkGemojiToEmoji);

var _remarkVdom = require('remark-vdom');

var _remarkVdom2 = _interopRequireDefault(_remarkVdom);

var _markdownLink = require('./markdown-link');

var _markdownLink2 = _interopRequireDefault(_markdownLink);

var _markdownCode = require('./markdown-code');

var _markdownCode2 = _interopRequireDefault(_markdownCode);

var _markdownHeadline = require('./markdown-headline');

var _markdownHeadline2 = _interopRequireDefault(_markdownHeadline);

var _wrap = require('./wrap');

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = render;


function render(source, options) {
	var base = options.base,
	    hash = options.hash,
	    highlights = options.highlights,
	    highlight = options.highlight,
	    query = options.query,
	    pathname = options.pathname,
	    onHashChange = options.onHashChange;

	var h = _react2.default.createElement;
	var headline = (0, _wrap2.default)(_markdownHeadline2.default);

	var table = (0, _wrap2.default)(strictChildren(MarkdownGeneric, ['thead', 'tbody']));
	var tbody = (0, _wrap2.default)(strictChildren(MarkdownGeneric, ['tr']));
	var tr = (0, _wrap2.default)(strictChildren(MarkdownGeneric, ['td', 'th']));
	var td = (0, _wrap2.default)(MarkdownGeneric);

	var link = { base: base, hash: hash, query: query, pathname: pathname, onHashChange: onHashChange };
	var code = { highlights: highlights, highlight: highlight };

	var components = {
		a: (0, _wrap2.default)(_markdownLink2.default, link),
		code: (0, _wrap2.default)(_markdownCode2.default, code),
		h1: headline,
		h2: headline,
		h3: headline,
		h4: headline,
		h5: headline,
		h6: headline,
		table: table,
		thead: tbody,
		tbody: tbody,
		tr: tr,
		th: td,
		td: td
	};

	var sanitize = (0, _lodash.merge)({}, _github2.default);
	sanitize.attributes = {
		a: ['href', 'title'],
		code: ['className'],
		img: ['src', 'alt']
	};

	var opts = { h: h, components: components, sanitize: sanitize };

	return (0, _remark2.default)().use(_remarkVdom2.default, opts).use(_remarkGemojiToEmoji2.default).process(source).contents;
}

function MarkdownGeneric(props) {
	var Component = props.tagName;
	return _react2.default.createElement(
		Component,
		null,
		props.children
	);
}

function strictChildren(Component, tagNames) {
	return function (props) {
		var children = _react.Children.toArray(props.children).filter(function (child) {
			return (typeof child === 'undefined' ? 'undefined' : (0, _typeof3.default)(child)) === 'object' && tagNames.includes(child.props.tagName);
		});
		return _react2.default.createElement(
			Component,
			props,
			children
		);
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi9yZW5kZXIuanMiXSwibmFtZXMiOlsicmVuZGVyIiwic291cmNlIiwib3B0aW9ucyIsImJhc2UiLCJoYXNoIiwiaGlnaGxpZ2h0cyIsImhpZ2hsaWdodCIsInF1ZXJ5IiwicGF0aG5hbWUiLCJvbkhhc2hDaGFuZ2UiLCJoIiwiY3JlYXRlRWxlbWVudCIsImhlYWRsaW5lIiwidGFibGUiLCJzdHJpY3RDaGlsZHJlbiIsIk1hcmtkb3duR2VuZXJpYyIsInRib2R5IiwidHIiLCJ0ZCIsImxpbmsiLCJjb2RlIiwiY29tcG9uZW50cyIsImEiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJ0aGVhZCIsInRoIiwic2FuaXRpemUiLCJhdHRyaWJ1dGVzIiwiaW1nIiwib3B0cyIsInVzZSIsInByb2Nlc3MiLCJjb250ZW50cyIsInByb3BzIiwiQ29tcG9uZW50IiwidGFnTmFtZSIsImNoaWxkcmVuIiwidGFnTmFtZXMiLCJ0b0FycmF5IiwiZmlsdGVyIiwiY2hpbGQiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlQSxNOzs7QUFFZixTQUFTQSxNQUFULENBQWdCQyxNQUFoQixFQUF3QkMsT0FBeEIsRUFBaUM7QUFBQSxLQUN6QkMsSUFEeUIsR0FDMkNELE9BRDNDLENBQ3pCQyxJQUR5QjtBQUFBLEtBQ25CQyxJQURtQixHQUMyQ0YsT0FEM0MsQ0FDbkJFLElBRG1CO0FBQUEsS0FDYkMsVUFEYSxHQUMyQ0gsT0FEM0MsQ0FDYkcsVUFEYTtBQUFBLEtBQ0RDLFNBREMsR0FDMkNKLE9BRDNDLENBQ0RJLFNBREM7QUFBQSxLQUNVQyxLQURWLEdBQzJDTCxPQUQzQyxDQUNVSyxLQURWO0FBQUEsS0FDaUJDLFFBRGpCLEdBQzJDTixPQUQzQyxDQUNpQk0sUUFEakI7QUFBQSxLQUMyQkMsWUFEM0IsR0FDMkNQLE9BRDNDLENBQzJCTyxZQUQzQjs7QUFFaEMsS0FBTUMsSUFBSSxnQkFBTUMsYUFBaEI7QUFDQSxLQUFNQyxXQUFXLCtDQUFqQjs7QUFFQSxLQUFNQyxRQUFRLG9CQUFLQyxlQUFlQyxlQUFmLEVBQWdDLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBaEMsQ0FBTCxDQUFkO0FBQ0EsS0FBTUMsUUFBUSxvQkFBS0YsZUFBZUMsZUFBZixFQUFnQyxDQUFDLElBQUQsQ0FBaEMsQ0FBTCxDQUFkO0FBQ0EsS0FBTUUsS0FBSyxvQkFBS0gsZUFBZUMsZUFBZixFQUFnQyxDQUFDLElBQUQsRUFBTyxJQUFQLENBQWhDLENBQUwsQ0FBWDtBQUNBLEtBQU1HLEtBQUssb0JBQUtILGVBQUwsQ0FBWDs7QUFFQSxLQUFNSSxPQUFPLEVBQUNoQixVQUFELEVBQU9DLFVBQVAsRUFBYUcsWUFBYixFQUFvQkMsa0JBQXBCLEVBQThCQywwQkFBOUIsRUFBYjtBQUNBLEtBQU1XLE9BQU8sRUFBQ2Ysc0JBQUQsRUFBYUMsb0JBQWIsRUFBYjs7QUFFQSxLQUFNZSxhQUFhO0FBQ2xCQyxLQUFHLDRDQUFtQkgsSUFBbkIsQ0FEZTtBQUVsQkMsUUFBTSw0Q0FBbUJBLElBQW5CLENBRlk7QUFHbEJHLE1BQUlYLFFBSGM7QUFJbEJZLE1BQUlaLFFBSmM7QUFLbEJhLE1BQUliLFFBTGM7QUFNbEJjLE1BQUlkLFFBTmM7QUFPbEJlLE1BQUlmLFFBUGM7QUFRbEJnQixNQUFJaEIsUUFSYztBQVNsQkMsY0FUa0I7QUFVbEJnQixTQUFPYixLQVZXO0FBV2xCQSxjQVhrQjtBQVlsQkMsUUFaa0I7QUFhbEJhLE1BQUlaLEVBYmM7QUFjbEJBO0FBZGtCLEVBQW5COztBQWlCQSxLQUFNYSxXQUFXLG1CQUFNLEVBQU4sbUJBQWpCO0FBQ0FBLFVBQVNDLFVBQVQsR0FBc0I7QUFDckJWLEtBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQURrQjtBQUVyQkYsUUFBTSxDQUFDLFdBQUQsQ0FGZTtBQUdyQmEsT0FBSyxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBSGdCLEVBQXRCOztBQU1BLEtBQU1DLE9BQU8sRUFBQ3hCLElBQUQsRUFBSVcsc0JBQUosRUFBZ0JVLGtCQUFoQixFQUFiOztBQUVBLFFBQU8sd0JBQ0xJLEdBREssdUJBQ0tELElBREwsRUFFTEMsR0FGSyxnQ0FHTEMsT0FISyxDQUdHbkMsTUFISCxFQUlMb0MsUUFKRjtBQUtBOztBQUVELFNBQVN0QixlQUFULENBQXlCdUIsS0FBekIsRUFBZ0M7QUFDL0IsS0FBTUMsWUFBWUQsTUFBTUUsT0FBeEI7QUFDQSxRQUFPO0FBQUMsV0FBRDtBQUFBO0FBQVlGLFFBQU1HO0FBQWxCLEVBQVA7QUFDQTs7QUFFRCxTQUFTM0IsY0FBVCxDQUF3QnlCLFNBQXhCLEVBQW1DRyxRQUFuQyxFQUE2QztBQUM1QyxRQUFPLGlCQUFTO0FBQ2YsTUFBTUQsV0FBVyxnQkFBU0UsT0FBVCxDQUFpQkwsTUFBTUcsUUFBdkIsRUFDZkcsTUFEZSxDQUNSLGlCQUFTO0FBQ2hCLFVBQU8sUUFBT0MsS0FBUCx1REFBT0EsS0FBUCxPQUFpQixRQUFqQixJQUE2QkgsU0FBU0ksUUFBVCxDQUFrQkQsTUFBTVAsS0FBTixDQUFZRSxPQUE5QixDQUFwQztBQUNBLEdBSGUsQ0FBakI7QUFJQSxTQUFPO0FBQUMsWUFBRDtBQUFlRixRQUFmO0FBQXVCRztBQUF2QixHQUFQO0FBQ0EsRUFORDtBQU9BIiwiZmlsZSI6InJlbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnaCBmcm9tICdoYXN0LXV0aWwtc2FuaXRpemUvbGliL2dpdGh1Yic7XG5pbXBvcnQge21lcmdlfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7Q2hpbGRyZW59IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZW1hcmsgZnJvbSAncmVtYXJrJztcbmltcG9ydCBlbW9qaSBmcm9tICdyZW1hcmstZ2Vtb2ppLXRvLWVtb2ppJztcbmltcG9ydCB2ZG9tIGZyb20gJ3JlbWFyay12ZG9tJztcblxuaW1wb3J0IE1hcmtkb3duTGluayBmcm9tICcuL21hcmtkb3duLWxpbmsnO1xuaW1wb3J0IE1hcmtkb3duQ29kZSBmcm9tICcuL21hcmtkb3duLWNvZGUnO1xuaW1wb3J0IE1hcmtkb3duSGVhZGxpbmUgZnJvbSAnLi9tYXJrZG93bi1oZWFkbGluZSc7XG5pbXBvcnQgd3JhcCBmcm9tICcuL3dyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG5cbmZ1bmN0aW9uIHJlbmRlcihzb3VyY2UsIG9wdGlvbnMpIHtcblx0Y29uc3Qge2Jhc2UsIGhhc2gsIGhpZ2hsaWdodHMsIGhpZ2hsaWdodCwgcXVlcnksIHBhdGhuYW1lLCBvbkhhc2hDaGFuZ2V9ID0gb3B0aW9ucztcblx0Y29uc3QgaCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQ7XG5cdGNvbnN0IGhlYWRsaW5lID0gd3JhcChNYXJrZG93bkhlYWRsaW5lKTtcblxuXHRjb25zdCB0YWJsZSA9IHdyYXAoc3RyaWN0Q2hpbGRyZW4oTWFya2Rvd25HZW5lcmljLCBbJ3RoZWFkJywgJ3Rib2R5J10pKTtcblx0Y29uc3QgdGJvZHkgPSB3cmFwKHN0cmljdENoaWxkcmVuKE1hcmtkb3duR2VuZXJpYywgWyd0ciddKSk7XG5cdGNvbnN0IHRyID0gd3JhcChzdHJpY3RDaGlsZHJlbihNYXJrZG93bkdlbmVyaWMsIFsndGQnLCAndGgnXSkpO1xuXHRjb25zdCB0ZCA9IHdyYXAoTWFya2Rvd25HZW5lcmljKTtcblxuXHRjb25zdCBsaW5rID0ge2Jhc2UsIGhhc2gsIHF1ZXJ5LCBwYXRobmFtZSwgb25IYXNoQ2hhbmdlfTtcblx0Y29uc3QgY29kZSA9IHtoaWdobGlnaHRzLCBoaWdobGlnaHR9O1xuXG5cdGNvbnN0IGNvbXBvbmVudHMgPSB7XG5cdFx0YTogd3JhcChNYXJrZG93bkxpbmssIGxpbmspLFxuXHRcdGNvZGU6IHdyYXAoTWFya2Rvd25Db2RlLCBjb2RlKSxcblx0XHRoMTogaGVhZGxpbmUsXG5cdFx0aDI6IGhlYWRsaW5lLFxuXHRcdGgzOiBoZWFkbGluZSxcblx0XHRoNDogaGVhZGxpbmUsXG5cdFx0aDU6IGhlYWRsaW5lLFxuXHRcdGg2OiBoZWFkbGluZSxcblx0XHR0YWJsZSxcblx0XHR0aGVhZDogdGJvZHksXG5cdFx0dGJvZHksXG5cdFx0dHIsXG5cdFx0dGg6IHRkLFxuXHRcdHRkXG5cdH07XG5cblx0Y29uc3Qgc2FuaXRpemUgPSBtZXJnZSh7fSwgZ2gpO1xuXHRzYW5pdGl6ZS5hdHRyaWJ1dGVzID0ge1xuXHRcdGE6IFsnaHJlZicsICd0aXRsZSddLFxuXHRcdGNvZGU6IFsnY2xhc3NOYW1lJ10sXG5cdFx0aW1nOiBbJ3NyYycsICdhbHQnXVxuXHR9O1xuXG5cdGNvbnN0IG9wdHMgPSB7aCwgY29tcG9uZW50cywgc2FuaXRpemV9O1xuXG5cdHJldHVybiByZW1hcmsoKVxuXHRcdC51c2UodmRvbSwgb3B0cylcblx0XHQudXNlKGVtb2ppKVxuXHRcdC5wcm9jZXNzKHNvdXJjZSlcblx0XHQuY29udGVudHM7XG59XG5cbmZ1bmN0aW9uIE1hcmtkb3duR2VuZXJpYyhwcm9wcykge1xuXHRjb25zdCBDb21wb25lbnQgPSBwcm9wcy50YWdOYW1lO1xuXHRyZXR1cm4gPENvbXBvbmVudD57cHJvcHMuY2hpbGRyZW59PC9Db21wb25lbnQ+O1xufVxuXG5mdW5jdGlvbiBzdHJpY3RDaGlsZHJlbihDb21wb25lbnQsIHRhZ05hbWVzKSB7XG5cdHJldHVybiBwcm9wcyA9PiB7XG5cdFx0Y29uc3QgY2hpbGRyZW4gPSBDaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKVxuXHRcdFx0LmZpbHRlcihjaGlsZCA9PiB7XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIHRhZ05hbWVzLmluY2x1ZGVzKGNoaWxkLnByb3BzLnRhZ05hbWUpO1xuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfT57Y2hpbGRyZW59PC9Db21wb25lbnQ+O1xuXHR9O1xufVxuIl19