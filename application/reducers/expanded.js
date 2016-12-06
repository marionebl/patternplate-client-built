'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxActions = require('redux-actions');

var defaultValue = true;

function onExpandedLocationChange(_, action) {
	return action.payload.query.expanded !== 'false';
}

exports.default = (0, _reduxActions.handleActions)({
	'@@router/LOCATION_CHANGE': onExpandedLocationChange
}, defaultValue);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9leHBhbmRlZC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0VmFsdWUiLCJvbkV4cGFuZGVkTG9jYXRpb25DaGFuZ2UiLCJfIiwiYWN0aW9uIiwicGF5bG9hZCIsInF1ZXJ5IiwiZXhwYW5kZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLGVBQWUsSUFBckI7O0FBRUEsU0FBU0Msd0JBQVQsQ0FBa0NDLENBQWxDLEVBQXFDQyxNQUFyQyxFQUE2QztBQUM1QyxRQUFPQSxPQUFPQyxPQUFQLENBQWVDLEtBQWYsQ0FBcUJDLFFBQXJCLEtBQWtDLE9BQXpDO0FBQ0E7O2tCQUVjLGlDQUFjO0FBQzVCLDZCQUE0Qkw7QUFEQSxDQUFkLEVBRVpELFlBRlksQyIsImZpbGUiOiJleHBhbmRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aGFuZGxlQWN0aW9uc30gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5cbmNvbnN0IGRlZmF1bHRWYWx1ZSA9IHRydWU7XG5cbmZ1bmN0aW9uIG9uRXhwYW5kZWRMb2NhdGlvbkNoYW5nZShfLCBhY3Rpb24pIHtcblx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkLnF1ZXJ5LmV4cGFuZGVkICE9PSAnZmFsc2UnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcblx0J0BAcm91dGVyL0xPQ0FUSU9OX0NIQU5HRSc6IG9uRXhwYW5kZWRMb2NhdGlvbkNoYW5nZVxufSwgZGVmYXVsdFZhbHVlKTtcbiJdfQ==