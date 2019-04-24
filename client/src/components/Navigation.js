import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
	<div>
		<ul>
			<li>
				<Link to="/login">Manager Log In</Link>
			</li>
			<li>
				<Link to="/admin-home">Team Dashboard</Link>
			</li>
		</ul>
	</div>
)

export default Navigation;