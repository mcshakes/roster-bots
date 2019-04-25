import React from "react";
import { 
	BrowserRouter as Router,
	Route,
	Switch
 } from "react-router-dom";

import SignUpPage from "./SignUp";
import LogInPage from "./LogIn";
import Navigation from "./Navigation";
import LandingPage from "./LandingPage";
import TeamDashboard from "./TeamDashboard";

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
		console.log(token)
		if (token) {
			this.setState({ authUser: token })
		} else {
			console.log("User unauthenticated")
			this.setState({ authUser: token })
		}
	}

	render() {

		return (
			<div>
				<Router>
					<Navigation />

					<hr/>
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route path="/login" component={LogInPage} />
						<Route path="/dashboard" component={TeamDashboard} />
						<Route path="/sign-up" component={SignUpPage} />
					</Switch>
				</Router>
			</div>
		)
	}	
}

export default App;