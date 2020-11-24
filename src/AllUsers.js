import React, {Component} from 'react';
import User from './User';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import FullUser from './FullUser';

class AllUsers extends Component {

	state = {users: []};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(value => value.json())
			.then(users => {
				this.setState({users});
			});


	}

	render() {
		console.log('all users');
		let {users} = this.state;
		return (
			<div>
				{
					users.map(value => (<User value={value} key={value.id}/>))
				}

				{/*<Switch>*/}
				{/*	<Route path={'/users/:id'}>*/}
				{/*		<FullUser/>*/}

				{/*	</Route>*/}

				{/*</Switch>*/}

			</div>
		);
	}
}

export default AllUsers;
