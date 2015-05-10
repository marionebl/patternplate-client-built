import 'isomorphic-fetch';
import layout from '../layouts/demo';

function demoRouteFactory (application) {
	return async function demoRoute () {
		const config = application.configuration.client;
		let clientPath = config.path[config.path.length - 1] === '/' ? config.path : `${config.path}/`
		let base = `http://${config.host}:${config.port}${clientPath}`;

		let path = this.params.path;

		let templateData = {
			'style': {
				'index': '',
				'demo': ''
			},
			'script': {
				'index': '',
				'demo': ''
			},
			'content': '',
			'raw': null,
			'title': path
		};

		let response = await fetch(`${base}pattern/${path}`);

		try {
			response = await response;
		} catch (err) {
			application.log.error(err);
			this.throw(err, 500);
		}

		let data = response.json();

		try {
			data = await data;

			if (data.results.Style) {
				templateData.style.index = data.results.Style.buffer || '';
				templateData.style.demo = data.results.Style.demoBuffer || '';
			}

			if (data.results.Markup) {
				templateData.content = data.results.Markup.demoBuffer || data.results.Markup.buffer;
			}

			if (data.results.Script) {
				templateData.script.index = data.results.Script.buffer || '';
				templateData.script.demo = data.results.Script.demoBuffer || '';
			}
			this.body = layout(templateData);
		} catch (err) {
			application.log.error(err);
			this.throw(err, 500);
		}
	};
}

export default demoRouteFactory;