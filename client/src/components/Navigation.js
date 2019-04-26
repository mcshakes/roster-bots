import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOut";
import { AuthConsumer } from "./AuthContext";
import '../styles/App.css';

const Navigation = () => (
	<header className="header-nav">
		<AuthConsumer>
			{({ isAuth }) => {
		      console.log(isAuth);
		      return isAuth ? <NavigationAuthenticated /> : <NavigationNonAuthenticated />
		      }	
		    }
		</AuthConsumer>
	</header>
)

const NavigationAuthenticated = () => (
	<div >
		<ul>
			<li>
				<Link to="/admin-dashboard">Team Dashboard</Link>
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