import React from "react";
import { 
	BrowserRouter as Router,
	Route
 } from "react-router-dom";

import SignUpPage from "./SignUp";
import LogInPage from "./LogIn";
import Navigation from "./Navigation";
import LandingPage from "./LandingPage";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			authUser: null
		}
	}

	render() {

		return (
			<div>
				<Router>
					<Navigation />

					<hr/>

					<Route exact path="/" component={LandingPage} />
					<Route path="/login" component={LogInPage} />
					<Route path="/sign-up" component={SignUpPage} />
				</Router>
			</div>
		)
	}	
}

export default App;