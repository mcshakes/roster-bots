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
			isAuth: localStorage.getItem("token") ? true: false 
		}
	}

	setUserAuth = (data) => {
		localStorage.setItem("token", data.token)
		this.setState({
			isAuth: data.isAuth
		})
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
							<Route path="/login" component={() => <LogInPage setUserAuth={this.setUserAuth} />} />
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