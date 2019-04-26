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
import '../styles/App.css';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isAuth: localStorage.getItem("token") ? true : false ,
			currentEmail: localStorage.getItem("currentEmail") ? localStorage.getItem("currentEmail") : ""
		}
	}

	setUserAuth = (data) => {
		localStorage.setItem("token", data.token)
		localStorage.setItem("currentEmail", data.currentEmail)
		
		this.setState({
			isAuth: data.isAuth,
			currentEmail: data.currentEmail
		})
	}

	render() {

		return (
			<div className="grid-container">
				<Router>
					<AuthProvider value={this.state}>
						<Navigation/>

						<hr/>
						<Switch>
							<Route exact path="/" component={LandingPage} />
							<Route path="/login" component={() => <LogInPage setUserAuth={this.setUserAuth} />} />
							<Route path="/admin-dashboard" component={() => <TeamDashboard email={this.state.currentEmail} /> } />
							<Route path="/sign-up" component={() => <SignUpPage setUserAuth={this.setUserAuth} />} />
						</Switch>
					</AuthProvider>
				</Router>
			</div>
		)
	}	
}

export default App;