import React, {Component} from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

class User extends Component {
	render() {
		console.log('render user');
		let {value} = this.props;
		return (
			<div>
				{value.id} {value.name} - <Link to={`/users/${value.id}`}>info</Link>

			</div>
		);
	}
}

export default User;
