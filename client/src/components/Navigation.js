import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOut";
import { AuthConsumer } from "./AuthContext";
import '../styles/App.css';

const Navigation = () => (
	<header className="header-container">
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
	<div className="header-nav">
		<ul>
			<li>
				<Link to="/admin-dashboard">Team Dashboard</Link>
			</li>
			<li>
				<LogOutButton />
			</li>
		</ul>
	</div>
)

const NavigationNonAuthenticated = () => (
	<div className="header-nav">
		<ul>
			<li>
				<Link to="/">Manager Log In</Link>
			</li>
		</ul>
	</div>
)

export default Navigation;