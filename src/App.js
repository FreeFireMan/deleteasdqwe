import React, {Component} from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import AllUsers from './AllUsers';

class App extends Component {
	render() {
		return (
			<div>
				<Router>

					<Link to={'/users'}>
						users
					</Link>

					<Switch>
						<Route path={'/users'} >
							<AllUsers/>
						</Route>
					</Switch>
				</Router>

			</div>
		);
	}
}

export default App;
