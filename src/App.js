import React, {Component} from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import AllUsers from './AllUsers';
import FullUser from "./FullUser";

class App extends Component {
	render() {
		return (
			<div>
				<Router>

					<Link to={'/users'}>
						users
					</Link>

					<Switch>
						<Route path={'/users'} exact component={AllUsers}/>
						<Route path={'/users/:id'} component={FullUser}/>
					</Switch>
				</Router>

			</div>
		);
	}
}

export default App;
