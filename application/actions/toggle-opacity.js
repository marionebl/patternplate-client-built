'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = toggleOpacity;
var type = exports.type = 'TOGGLE_OPACITY';

function toggleOpacity() {
	return function (dispatch, getState) {
		var opacity = getState().opacity;
		dispatch((0, _.patchLocation)({ query: { opacity: !opacity } }));
	};
}

toggleOpacity.type = type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL3RvZ2dsZS1vcGFjaXR5LmpzIl0sIm5hbWVzIjpbInRvZ2dsZU9wYWNpdHkiLCJ0eXBlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm9wYWNpdHkiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztrQkFFZUEsYTtBQUNSLElBQU1DLHNCQUFPLGdCQUFiOztBQUVQLFNBQVNELGFBQVQsR0FBeUI7QUFDeEIsUUFBTyxVQUFDRSxRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDOUIsTUFBTUMsVUFBVUQsV0FBV0MsT0FBM0I7QUFDQUYsV0FBUyxxQkFBYyxFQUFDRyxPQUFPLEVBQUNELFNBQVMsQ0FBQ0EsT0FBWCxFQUFSLEVBQWQsQ0FBVDtBQUNBLEVBSEQ7QUFJQTs7QUFFREosY0FBY0MsSUFBZCxHQUFxQkEsSUFBckIiLCJmaWxlIjoidG9nZ2xlLW9wYWNpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BhdGNoTG9jYXRpb259IGZyb20gJy4vJztcblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlT3BhY2l0eTtcbmV4cG9ydCBjb25zdCB0eXBlID0gJ1RPR0dMRV9PUEFDSVRZJztcblxuZnVuY3Rpb24gdG9nZ2xlT3BhY2l0eSgpIHtcblx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcblx0XHRjb25zdCBvcGFjaXR5ID0gZ2V0U3RhdGUoKS5vcGFjaXR5O1xuXHRcdGRpc3BhdGNoKHBhdGNoTG9jYXRpb24oe3F1ZXJ5OiB7b3BhY2l0eTogIW9wYWNpdHl9fSkpO1xuXHR9O1xufVxuXG50b2dnbGVPcGFjaXR5LnR5cGUgPSB0eXBlO1xuIl19