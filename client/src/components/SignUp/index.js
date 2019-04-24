import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const SignUpPage = () => (
	<div>
		<h1>Sign Up</h1>
		<SignUpForm />
	</div>
)

const INITIAL_STATE ={
	teamName: "",
	email: "",
	password: "",
	error: null
}

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE }
	}

	onSubmit = event => {
		const { teamName, email, password} = this.state;
		
		axios.post("/teams", { "team": {
											name: teamName,
											email: email,
											password: password
										}
		})
		.then(newUser => {
			this.setState({ ...INITIAL_STATE });
		})
		.catch(error => {
			this.setState({ error });
		})
		event.preventDefault();
	}

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	};

	render() {

		const {
			teamName,
			email,
			password,
			error
		} = this.state;

		const isInvalid = password === '' || email === '' || teamName === '';

		return (
			
			<form onSubmit={this.onSubmit}>
				<input
		          name="teamName"
		          value={teamName}
		          onChange={this.onChange}
		          type="text"
		          placeholder="Your Team Name"
		        />
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
		        
		        <button disabled={isInvalid} type="submit">Sign Up</button>

		        {error && <p>{error.message}</p>}
			</form>
		)
	}
}

const SignUpLink = () => (
	<h4>
		Dont' have an account yet? <Link to="/sign-up">Sign Up</Link>
	</h4>
)

export default SignUpPage;

export { SignUpForm, SignUpLink };