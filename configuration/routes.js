'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var routes = {
	path: ['application/routes', 'application/patternplate-client/routes'],
	enabled: {
		index: {
			enabled: true,
			path: '/'
		},
		pattern: {
			enabled: true,
			path: '/pattern/:path+'
		},
		demo: {
			enabled: true,
			path: '/demo/:id+'
		},
		component: {
			enabled: true,
			path: '/demo/:id+/component.js'
		},
		script: {
			enabled: true,
			path: '/script/:path+'
		},
		style: {
			enabled: true,
			path: '/style/:path+'
		},
		static: {
			enabled: true,
			path: '/static/:path+'
		},
		zcatch: {
			enabled: true,
			path: '!(/api/)(.*)'
		}
	}
};

exports.default = routes;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jb25maWd1cmF0aW9uL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJwYXRoIiwiZW5hYmxlZCIsImluZGV4IiwicGF0dGVybiIsImRlbW8iLCJjb21wb25lbnQiLCJzY3JpcHQiLCJzdHlsZSIsInN0YXRpYyIsInpjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxTQUFTO0FBQ2RDLE9BQU0sQ0FDTCxvQkFESyxFQUVMLHdDQUZLLENBRFE7QUFLZEMsVUFBUztBQUNSQyxTQUFPO0FBQ05ELFlBQVMsSUFESDtBQUVORCxTQUFNO0FBRkEsR0FEQztBQUtSRyxXQUFTO0FBQ1JGLFlBQVMsSUFERDtBQUVSRCxTQUFNO0FBRkUsR0FMRDtBQVNSSSxRQUFNO0FBQ0xILFlBQVMsSUFESjtBQUVMRCxTQUFNO0FBRkQsR0FURTtBQWFSSyxhQUFXO0FBQ1ZKLFlBQVMsSUFEQztBQUVWRCxTQUFNO0FBRkksR0FiSDtBQWlCUk0sVUFBUTtBQUNQTCxZQUFTLElBREY7QUFFUEQsU0FBTTtBQUZDLEdBakJBO0FBcUJSTyxTQUFPO0FBQ05OLFlBQVMsSUFESDtBQUVORCxTQUFNO0FBRkEsR0FyQkM7QUF5QlJRLFVBQVE7QUFDUFAsWUFBUyxJQURGO0FBRVBELFNBQU07QUFGQyxHQXpCQTtBQTZCUlMsVUFBUTtBQUNQUixZQUFTLElBREY7QUFFUEQsU0FBTTtBQUZDO0FBN0JBO0FBTEssQ0FBZjs7a0JBeUNlRCxNIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHtcblx0cGF0aDogW1xuXHRcdCdhcHBsaWNhdGlvbi9yb3V0ZXMnLFxuXHRcdCdhcHBsaWNhdGlvbi9wYXR0ZXJucGxhdGUtY2xpZW50L3JvdXRlcydcblx0XSxcblx0ZW5hYmxlZDoge1xuXHRcdGluZGV4OiB7XG5cdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0cGF0aDogJy8nXG5cdFx0fSxcblx0XHRwYXR0ZXJuOiB7XG5cdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0cGF0aDogJy9wYXR0ZXJuLzpwYXRoKydcblx0XHR9LFxuXHRcdGRlbW86IHtcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRwYXRoOiAnL2RlbW8vOmlkKydcblx0XHR9LFxuXHRcdGNvbXBvbmVudDoge1xuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdHBhdGg6ICcvZGVtby86aWQrL2NvbXBvbmVudC5qcydcblx0XHR9LFxuXHRcdHNjcmlwdDoge1xuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdHBhdGg6ICcvc2NyaXB0LzpwYXRoKydcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0cGF0aDogJy9zdHlsZS86cGF0aCsnXG5cdFx0fSxcblx0XHRzdGF0aWM6IHtcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRwYXRoOiAnL3N0YXRpYy86cGF0aCsnXG5cdFx0fSxcblx0XHR6Y2F0Y2g6IHtcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRwYXRoOiAnISgvYXBpLykoLiopJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIl19