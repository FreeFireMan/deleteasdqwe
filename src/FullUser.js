import React, {Component} from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

class FullUser extends Component {
	state = {user: null};

	componentDidMount() {
		let {match: {params: {id}}} = this.props;
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(value => value.json())
			.then(value => {
				console.log(value);
				this.setState({user: value});

			});

	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		let {match: {params: {id}}} = this.props;
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(value => value.json())
			.then(value => {
				console.log(value);
				this.setState({user: value});
			});

	}

	render() {

		console.log('render user');

		return (
			<div>
				full

			</div>
		);
	}
}

export default withRouter(FullUser);
