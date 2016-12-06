'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxActions = require('redux-actions');

var defaultValue = '';

function onLightboxLocationChange(_, action) {
	return action.payload.query.lightbox;
}

exports.default = (0, _reduxActions.handleActions)({
	'@@router/LOCATION_CHANGE': onLightboxLocationChange
}, defaultValue);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9saWdodGJveC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0VmFsdWUiLCJvbkxpZ2h0Ym94TG9jYXRpb25DaGFuZ2UiLCJfIiwiYWN0aW9uIiwicGF5bG9hZCIsInF1ZXJ5IiwibGlnaHRib3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLGVBQWUsRUFBckI7O0FBRUEsU0FBU0Msd0JBQVQsQ0FBa0NDLENBQWxDLEVBQXFDQyxNQUFyQyxFQUE2QztBQUM1QyxRQUFPQSxPQUFPQyxPQUFQLENBQWVDLEtBQWYsQ0FBcUJDLFFBQTVCO0FBQ0E7O2tCQUVjLGlDQUFjO0FBQzVCLDZCQUE0Qkw7QUFEQSxDQUFkLEVBRVpELFlBRlksQyIsImZpbGUiOiJsaWdodGJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aGFuZGxlQWN0aW9uc30gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5cbmNvbnN0IGRlZmF1bHRWYWx1ZSA9ICcnO1xuXG5mdW5jdGlvbiBvbkxpZ2h0Ym94TG9jYXRpb25DaGFuZ2UoXywgYWN0aW9uKSB7XG5cdHJldHVybiBhY3Rpb24ucGF5bG9hZC5xdWVyeS5saWdodGJveDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG5cdCdAQHJvdXRlci9MT0NBVElPTl9DSEFOR0UnOiBvbkxpZ2h0Ym94TG9jYXRpb25DaGFuZ2Vcbn0sIGRlZmF1bHRWYWx1ZSk7XG4iXX0=