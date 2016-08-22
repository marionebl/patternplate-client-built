import React, {Component, PropTypes as t} from 'react';
import {connect} from 'react-redux';
import Remarkable from 'react-remarkable';
import {emojify} from 'node-emoji';
import md5 from 'md5';

import pure from 'pure-render-decorator';
import autobind from 'autobind-decorator';

import highlightCode from '../../actions/highlight-code';

@pure
@autobind
class Markdown extends Component {
	static propTypes = {
		base: t.string.isRequired,
		source: t.string.isRequired,
		highlights: t.object.isRequired,
		dispatch: t.func.isRequired
	};

	onHighlight(payload, language) {
		const {base, dispatch} = this.props;
		const id = ['highlight', language, md5(payload)].join(':');
		const highlight = this.props.highlights[id];
		const worker = `${base}script/highlight.bundle.js`;

		if (highlight) {
			return highlight;
		}

		const options = {
			id, payload, language, worker
		};

		dispatch(highlightCode(options));

		return payload;
	}

	render() {
		return (
			<div className="markdown">
				<Remarkable
					container="div"
					source={emojify(this.props.source)}
					options={{
						html: true,
						xhtmlOut: true,
						langPrefix: 'hljs ',
						highlight: this.onHighlight
					}}
					/>
			</div>
		);
	}
}

export default connect(state => {
	return {highlights: state.highlights};
})(Markdown);
