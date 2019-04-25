import React from "react";
import { 
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
 } from "react-router-dom";

import SignUpPage from "./SignUp";
import LogInPage from "./LogIn";
import Navigation from "./Navigation";
import LandingPage from "./LandingPage";
import TeamDashboard from "./TeamDashboard";
import { AuthProvider } from './AuthContext';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			authUser: null
		}
	}

	componentDidMount() {
		console.log("App mounted: Refreshing, then authenticating user...")

		const token = localStorage.getItem("token")

		if (token) {
			this.setState({ authUser: token, isAuth: true  })
		} else {
			this.setState({ authUser: token, isAuth: false })
		}
	}

	render() {

		return (
			<div>
				<Router>
					<AuthProvider value={this.state}>
						<Navigation/>

						<hr/>
						<Switch>
							<Route exact path="/" component={LandingPage} />
							<Route path="/login" component={LogInPage} />
							<Route path="/admin-dashboard" component={TeamDashboard} />
							<Route path="/sign-up" component={SignUpPage} />
						</Switch>
					</AuthProvider>
				</Router>
			</div>
		)
	}	
}

export default App;