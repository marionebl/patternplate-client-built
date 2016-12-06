'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _class, _class2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var start = { transform: 'translate3d(0, 0, 0)' };

var Ruler = (0, _autobindDecorator2.default)(_class = function (_Component) {
	(0, _inherits3.default)(Ruler, _Component);

	function Ruler() {
		(0, _classCallCheck3.default)(this, Ruler);
		return (0, _possibleConstructorReturn3.default)(this, (Ruler.__proto__ || (0, _getPrototypeOf2.default)(Ruler)).apply(this, arguments));
	}

	(0, _createClass3.default)(Ruler, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var end = this.props.type === 'horizontal' ? { transform: 'translate3d(-100%, 0, 0)' } : { transform: 'translate3d(0, -100%, 0)' };

			var keyframes = [start, end];
			var options = { duration: 100 };
			this.animation = this.ref.animate(keyframes, options);
			this.animation.pause();
			this.animation.currentTime = this.props.offset;
			global.a = this.animation;
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.animation.currentTime = this.props.offset;
		}
	}, {
		key: 'saveRef',
		value: function saveRef(ref) {
			this.ref = ref;
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			var type = props.type === 'horizontal' ? 'horizontal' : 'vertical';
			var markerPositionProperty = props.type === 'horizontal' ? 'left' : 'top';

			return _react2.default.createElement(
				'div',
				{ className: 'pattern-ruler pattern-ruler--' + type },
				_react2.default.createElement(
					'div',
					{ className: 'pattern-ruler__scale', ref: this.saveRef },
					_react2.default.createElement(RulerSteps, { type: props.type, length: props.length, step: props.step })
				),
				props.markers.map(function (marker) {
					var style = (0, _defineProperty3.default)({}, markerPositionProperty, marker + 'px');
					return _react2.default.createElement('div', { className: 'pattern-ruler__marker', key: marker, style: style });
				})
			);
		}
	}]);
	return Ruler;
}(_react.Component)) || _class;

exports.default = Ruler;


Ruler.propTypes = {
	length: _react.PropTypes.number.isRequired,
	markers: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
	offset: _react.PropTypes.number.isRequired,
	step: _react.PropTypes.number.isRequired,
	type: _react.PropTypes.string.isRequired
};

Ruler.defaultProps = {
	length: 0
};

var RulerSteps = (0, _pureRenderDecorator2.default)(_class2 = function (_Component2) {
	(0, _inherits3.default)(RulerSteps, _Component2);

	function RulerSteps() {
		(0, _classCallCheck3.default)(this, RulerSteps);
		return (0, _possibleConstructorReturn3.default)(this, (RulerSteps.__proto__ || (0, _getPrototypeOf2.default)(RulerSteps)).apply(this, arguments));
	}

	(0, _createClass3.default)(RulerSteps, [{
		key: 'render',
		value: function render() {
			var props = this.props;

			var steps = getSteps(props.length, props.step);
			var spacerProperty = props.type === 'horizontal' ? 'marginLeft' : 'marginTop';
			var orderProperty = props.type === 'horizontal' ? 'height' : 'width';
			var sizingProperty = props.type === 'horizontal' ? 'width' : 'height';

			return _react2.default.createElement(
				'ul',
				{ className: 'pattern-ruler__steps' },
				steps.map(function (step, index) {
					var _ref;

					var orderDimension = ['15px', '10px', '5px'][step.order - 1];
					var spacer = index > 0 ? props.step - 1 : 0;

					return _react2.default.createElement(
						'li',
						{
							key: index,
							className: 'pattern-ruler__step pattern-ruler__step--' + step.order,
							style: (_ref = {}, (0, _defineProperty3.default)(_ref, spacerProperty, spacer + 'px'), (0, _defineProperty3.default)(_ref, sizingProperty, '1px'), (0, _defineProperty3.default)(_ref, orderProperty, orderDimension), _ref)
						},
						typeof step.label !== 'undefined' && _react2.default.createElement(
							'span',
							{ className: 'pattern-ruler__label' },
							step.label
						)
					);
				})
			);
		}
	}]);
	return RulerSteps;
}(_react.Component)) || _class2;

RulerSteps.propTypes = {
	length: _react.PropTypes.number.isRequired,
	step: _react.PropTypes.number.isRequired,
	type: _react.PropTypes.string.isRequired
};

function getSteps(length, step) {
	return Array(Math.round(length / step)).fill(true).map(function (_, index) {
		return index;
	}).map(function (count) {
		var label = count % 10 === 0 ? count * step : null;
		var matches = [10, 5];
		var match = matches.find(function (n) {
			return count % n === 0;
		});
		var order = match ? matches.indexOf(match) + 1 : 3;
		return { label: label, order: order };
	});
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi1ydWxlci5qcyJdLCJuYW1lcyI6WyJzdGFydCIsInRyYW5zZm9ybSIsIlJ1bGVyIiwiZW5kIiwicHJvcHMiLCJ0eXBlIiwia2V5ZnJhbWVzIiwib3B0aW9ucyIsImR1cmF0aW9uIiwiYW5pbWF0aW9uIiwicmVmIiwiYW5pbWF0ZSIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJvZmZzZXQiLCJnbG9iYWwiLCJhIiwibWFya2VyUG9zaXRpb25Qcm9wZXJ0eSIsInNhdmVSZWYiLCJsZW5ndGgiLCJzdGVwIiwibWFya2VycyIsIm1hcCIsInN0eWxlIiwibWFya2VyIiwicHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJSdWxlclN0ZXBzIiwic3RlcHMiLCJnZXRTdGVwcyIsInNwYWNlclByb3BlcnR5Iiwib3JkZXJQcm9wZXJ0eSIsInNpemluZ1Byb3BlcnR5IiwiaW5kZXgiLCJvcmRlckRpbWVuc2lvbiIsIm9yZGVyIiwic3BhY2VyIiwibGFiZWwiLCJBcnJheSIsIk1hdGgiLCJyb3VuZCIsImZpbGwiLCJfIiwiY291bnQiLCJtYXRjaGVzIiwibWF0Y2giLCJmaW5kIiwibiIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxFQUFDQyxXQUFXLHNCQUFaLEVBQWQ7O0lBR3FCQyxLOzs7Ozs7Ozs7O3NDQUNBO0FBQ25CLE9BQU1DLE1BQU0sS0FBS0MsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLFlBQXBCLEdBQ1gsRUFBQ0osV0FBVywwQkFBWixFQURXLEdBRVgsRUFBQ0EsV0FBVywwQkFBWixFQUZEOztBQUlBLE9BQU1LLFlBQVksQ0FBQ04sS0FBRCxFQUFRRyxHQUFSLENB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QSxFQVRLLENBQVA7QUFVQSIsImZpbGUiOiJwYXR0ZXJuLXJ1bGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHB1cmUgZnJvbSAncHVyZS1yZW5kZXItZGVjb3JhdG9yJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuXG5jb25zdCBzdGFydCA9IHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKSd9O1xuXG5AYXV0b2JpbmRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgZW5kID0gdGhpcy5wcm9wcy50eXBlID09PSAnaG9yaXpvbnRhbCcgP1xuXHRcdFx0e3RyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSd9IDpcblx0XHRcdHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCknfTtcblxuXHRcdGNvbnN0IGtleWZyYW1lcyA9IFtzdGFydCwgZW5kXTtcblx0XHRjb25zdCBvcHRpb25zID0ge2R1cmF0aW9uOiAxMDB9O1xuXHRcdHRoaXMuYW5pbWF0aW9uID0gdGhpcy5yZWYuYW5pbWF0ZShrZXlmcmFtZXMsIG9wdGlvbnMpO1xuXHRcdHRoaXMuYW5pbWF0aW9uLnBhdXNlKCk7XG5cdFx0dGhpcy5hbmltYXRpb24uY3VycmVudFRpbWUgPSB0aGlzLnByb3BzLm9mZnNldDtcblx0XHRnbG9iYWwuYSA9IHRoaXMuYW5pbWF0aW9uO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdHRoaXMuYW5pbWF0aW9uLmN1cnJlbnRUaW1lID0gdGhpcy5wcm9wcy5vZmZzZXQ7XG5cdH1cblxuXHRzYXZlUmVmKHJlZikge1xuXHRcdHRoaXMucmVmID0gcmVmO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuXHRcdGNvbnN0IHR5cGUgPSBwcm9wcy50eXBlID09PSAnaG9yaXpvbnRhbCcgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuXHRcdGNvbnN0IG1hcmtlclBvc2l0aW9uUHJvcGVydHkgPSBwcm9wcy50eXBlID09PSAnaG9yaXpvbnRhbCcgPyAnbGVmdCcgOiAndG9wJztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHBhdHRlcm4tcnVsZXIgcGF0dGVybi1ydWxlci0tJHt0eXBlfWB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhdHRlcm4tcnVsZXJfX3NjYWxlXCIgcmVmPXt0aGlzLnNhdmVSZWZ9PlxuXHRcdFx0XHRcdDxSdWxlclN0ZXBzIHR5cGU9e3Byb3BzLnR5cGV9IGxlbmd0aD17cHJvcHMubGVuZ3RofSBzdGVwPXtwcm9wcy5zdGVwfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvcHMubWFya2Vycy5tYXAobWFya2VyID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlID0ge1ttYXJrZXJQb3NpdGlvblByb3BlcnR5XTogYCR7bWFya2VyfXB4YH07XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYXR0ZXJuLXJ1bGVyX19tYXJrZXJcIiBrZXk9e21hcmtlcn0gc3R5bGU9e3N0eWxlfS8+O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuUnVsZXIucHJvcFR5cGVzID0ge1xuXHRsZW5ndGg6IHQubnVtYmVyLmlzUmVxdWlyZWQsXG5cdG1hcmtlcnM6IHQuYXJyYXlPZih0Lm51bWJlcikuaXNSZXF1aXJlZCxcblx0b2Zmc2V0OiB0Lm51bWJlci5pc1JlcXVpcmVkLFxuXHRzdGVwOiB0Lm51bWJlci5pc1JlcXVpcmVkLFxuXHR0eXBlOiB0LnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5SdWxlci5kZWZhdWx0UHJvcHMgPSB7XG5cdGxlbmd0aDogMFxufTtcblxuQHB1cmVcbmNsYXNzIFJ1bGVyU3RlcHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0Y29uc3Qgc3RlcHMgPSBnZXRTdGVwcyhwcm9wcy5sZW5ndGgsIHByb3BzLnN0ZXApO1xuXHRcdGNvbnN0IHNwYWNlclByb3BlcnR5ID0gcHJvcHMudHlwZSA9PT0gJ2hvcml6b250YWwnID8gJ21hcmdpbkxlZnQnIDogJ21hcmdpblRvcCc7XG5cdFx0Y29uc3Qgb3JkZXJQcm9wZXJ0eSA9IHByb3BzLnR5cGUgPT09ICdob3Jpem9udGFsJyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblx0XHRjb25zdCBzaXppbmdQcm9wZXJ0eSA9IHByb3BzLnR5cGUgPT09ICdob3Jpem9udGFsJyA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPVwicGF0dGVybi1ydWxlcl9fc3RlcHNcIj5cblx0XHRcdFx0e3N0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBvcmRlckRpbWVuc2lvbiA9IFsnMTVweCcsICcxMHB4JywgJzVweCddW3N0ZXAub3JkZXIgLSAxXTtcblx0XHRcdFx0XHRjb25zdCBzcGFjZXIgPSBpbmRleCA+IDAgPyBwcm9wcy5zdGVwIC0gMSA6IDA7XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHBhdHRlcm4tcnVsZXJfX3N0ZXAgcGF0dGVybi1ydWxlcl9fc3RlcC0tJHtzdGVwLm9yZGVyfWB9XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0W3NwYWNlclByb3BlcnR5XTogYCR7c3BhY2VyfXB4YCxcblx0XHRcdFx0XHRcdFx0XHRbc2l6aW5nUHJvcGVydHldOiAnMXB4Jyxcblx0XHRcdFx0XHRcdFx0XHRbb3JkZXJQcm9wZXJ0eV06IG9yZGVyRGltZW5zaW9uXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHR5cGVvZiBzdGVwLmxhYmVsICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicGF0dGVybi1ydWxlcl9fbGFiZWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0ZXAubGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3VsPlxuXHRcdCk7XG5cdH1cbn1cblxuUnVsZXJTdGVwcy5wcm9wVHlwZXMgPSB7XG5cdGxlbmd0aDogdC5udW1iZXIuaXNSZXF1aXJlZCxcblx0c3RlcDogdC5udW1iZXIuaXNSZXF1aXJlZCxcblx0dHlwZTogdC5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZnVuY3Rpb24gZ2V0U3RlcHMobGVuZ3RoLCBzdGVwKSB7XG5cdHJldHVybiBBcnJheShNYXRoLnJvdW5kKGxlbmd0aCAvIHN0ZXApKVxuXHRcdC5maWxsKHRydWUpXG5cdFx0Lm1hcCgoXywgaW5kZXgpID0+IGluZGV4KVxuXHRcdC5tYXAoY291bnQgPT4ge1xuXHRcdFx0Y29uc3QgbGFiZWwgPSBjb3VudCAlIDEwID09PSAwID8gY291bnQgKiBzdGVwIDogbnVsbDtcblx0XHRcdGNvbnN0IG1hdGNoZXMgPSBbMTAsIDVdO1xuXHRcdFx0Y29uc3QgbWF0Y2ggPSBtYXRjaGVzLmZpbmQobiA9PiBjb3VudCAlIG4gPT09IDApO1xuXHRcdFx0Y29uc3Qgb3JkZXIgPSBtYXRjaCA/IG1hdGNoZXMuaW5kZXhPZihtYXRjaCkgKyAxIDogMztcblx0XHRcdHJldHVybiB7bGFiZWwsIG9yZGVyfTtcblx0XHR9KTtcbn1cbiJdfQ==