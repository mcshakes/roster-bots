import React from "react";

import { SignUpLink } from '../SignUp';

const LogInPage = () => (
	<div>
		<h1>Log In</h1>
		<LoginForm />
		<SignUpLink />
	</div>
)

const INITIAL_STATE ={
	email: "",
	password: "",
	error: null
}

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE }
	}

	onSubmit = event => {

		event.preventDefault();
	}

	onChange = event => {
		this.setState({ [event.target.name]: event.target.valeu })
	}

	render() {
		const { email, password, error } = this.state;

	    const isInvalid = password === '' || email === '';

	    return (
			<form onSubmit={this.onSubmit}>
		        <input
		          name="email"
		          value={email}
		          onChange={this.onChange}
		          type="text"
		          placeholder="Email Address"
		        />
		        <input
		          name="password"
		          value={password}
		          onChange={this.onChange}
		          type="password"
		          placeholder="Password"
		        />
		        
		        <button disabled={isInvalid} type="submit">Log In</button>

		        {error && <p>{error.message}</p>}
			</form>
	    )
	}
}

export default LogInPage;

export { LoginForm }