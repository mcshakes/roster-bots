import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOut";

const Navigation = ({ authUser }) => (
	
	<div>{authUser ? <NavigationAuthenticated /> : <NavigationNonAuthenticated />}</div>
)

const NavigationAuthenticated = () => (
	<div>
		<ul>
			<li>
				<Link to="/admin-home">Team Dashboard</Link>
			</li>
			<li>
				<Link to="/">Back to Home</Link>
			</li>
			<li>
				<LogOutButton />
			</li>
		</ul>
	</div>
)

const NavigationNonAuthenticated = () => (
	<div>
		<ul>
			<li>
				<Link to="/login">Manager Log In</Link>
			</li>
			<li>
				<Link to="/">Back to Home</Link>
			</li>
		</ul>
	</div>
)

export default Navigation;