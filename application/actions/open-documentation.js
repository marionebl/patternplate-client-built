'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = openDocumentation;
var type = exports.type = 'OPEN_DOCUMENTATION';

function openDocumentation() {
	return function (dispatch, getState) {
		var state = getState();
		var pathname = state.base;
		dispatch((0, _.patchLocation)({ pathname: pathname }));
	};
}

openDocumentation.type = type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL29wZW4tZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJvcGVuRG9jdW1lbnRhdGlvbiIsInR5cGUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwic3RhdGUiLCJwYXRobmFtZSIsImJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7a0JBRWVBLGlCO0FBQ1IsSUFBTUMsc0JBQU8sb0JBQWI7O0FBRVAsU0FBU0QsaUJBQVQsR0FBNkI7QUFDNUIsUUFBTyxVQUFDRSxRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDOUIsTUFBTUMsUUFBUUQsVUFBZDtBQUNBLE1BQU1FLFdBQVdELE1BQU1FLElBQXZCO0FBQ0FKLFdBQVMscUJBQWMsRUFBQ0csa0JBQUQsRUFBZCxDQUFUO0FBQ0EsRUFKRDtBQUtBOztBQUVETCxrQkFBa0JDLElBQWxCLEdBQXlCQSxJQUF6QiIsImZpbGUiOiJvcGVuLWRvY3VtZW50YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BhdGNoTG9jYXRpb259IGZyb20gJy4vJztcblxuZXhwb3J0IGRlZmF1bHQgb3BlbkRvY3VtZW50YXRpb247XG5leHBvcnQgY29uc3QgdHlwZSA9ICdPUEVOX0RPQ1VNRU5UQVRJT04nO1xuXG5mdW5jdGlvbiBvcGVuRG9jdW1lbnRhdGlvbigpIHtcblx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcblx0XHRjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG5cdFx0Y29uc3QgcGF0aG5hbWUgPSBzdGF0ZS5iYXNlO1xuXHRcdGRpc3BhdGNoKHBhdGNoTG9jYXRpb24oe3BhdGhuYW1lfSkpO1xuXHR9O1xufVxuXG5vcGVuRG9jdW1lbnRhdGlvbi50eXBlID0gdHlwZTtcbiJdfQ==