import React, {PropTypes as types} from 'react';
import {Link} from 'react-router';
import autobind from 'autobind-decorator';
import classnames from 'classnames';
import Icon from '../common/icon';

function getPathName(...fragments) {
	const raw = fragments
		.join('/')
		.split('/')
		.filter(Boolean)
		.map(fragment => fragment === '/' ? '' : fragment)
		.filter(Boolean)
		.join('/');
	const correction = raw[0] === '/' ? '' : '/';
	return `${correction}${raw}`;
}

export default class NavigationItem extends React.Component {
	displayName = 'NavigationItem';

	static propTypes = {
		base: types.string.isRequired,
		component: types.node,
		active: types.bool,
		hidden: types.bool,
		anchored: types.bool,
		linkTo: types.string,
		name: types.string.isRequired,
		symbol: types.string,
		searchQuery: types.string,
		id: types.oneOfType([
			types.string,
			types.number
		]),
		children: types.oneOfType([
			types.node,
			types.arrayOf(types.node)
		]),
		onClick: types.func,
		location: types.object,
		type: types.string
	};

	static defaultProps = {
		component: 'li',
		active: false,
		hidden: false,
		linkTo: 'pattern',
		onClick: () => {}
	};

	@autobind
	handleClick(e) {
		this.props.onClick(e, this);
	}

	render() {
		const {
			anchored, base, name, id, symbol, active, hidden, linkTo, location, type
		} = this.props;
		const {component: Component} = this.props;

		const modifiers = {
			'child-active': active,
			hidden,
			anchored
		};

		const itemClassName = classnames('navigation-item', modifiers);
		const linkClassName = classnames('navigation-link', modifiers);
		const pathname = getPathName(base, linkTo, id);
		const to = {pathname, query: location.query};
		const title = `Navigate to ${name} ${type}`;

		return (
			<Component className={itemClassName}>
				<Link
					onClick={this.handleClick}
					to={to}
					title={title}
					className={linkClassName}
					>
					<Icon base={base} symbol={symbol}/>
					<span>{name}</span>
				</Link>
				{this.props.children}
			</Component>
		);
	}
}
