import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthConsumer } from "../AuthContext";
import axios from "axios";

const SignUpPage = (props) => (
	<div className="log-form">
		<header className="form-header">
			<h1>Sign Up</h1>
		</header>
		
		<SignUpForm setUserAuth={props.setUserAuth}/>
	</div>
)

const INITIAL_STATE ={
	teamName: "",
	email: "",
	password: "",
	error: null,
	isAuthenticated: false
}

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE }
	}

	onSubmit = event => {
		const { teamName, email, password} = this.state;
		
		axios.post("api/v1/teams", { "team": {
											name: teamName,
											email: email,
											password: password
										}
		}, {
			headers: { Accept: 'application/json', "Content-Type": 'application/json' }
		})
		.then(res => {
			console.log("SHOULD BE TOKEN", res.data)
			this.props.setUserAuth({token: res.data.auth_token , isAuth: true, currentEmail: res.data.email})
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
	    	<AuthConsumer> 
	    	{
	    		({isAuth}) => {
	    			 if (isAuth) {
		                return <Redirect to={{path: "/admin-dashboard", state: {email: email}}} />
		              }

		              return (

		              		<form onSubmit={this.onSubmit} className="signup-actual-form">

		              			<div class="form-row">
									<input
							          name="teamName"
							          value={teamName}
							          onChange={this.onChange}
							          type="text"
							          placeholder="Your Team Name"
							        />

		              			</div>

		              			<div class="form-row">
							        <input
							          name="email"
							          value={email}
							          onChange={this.onChange}
							          type="text"
							          placeholder="Email Address"
							        />

		              			</div>

		              			<div class="form-row">
							        <input
							          name="password"
							          value={password}
							          onChange={this.onChange}
							          type="password"
							          placeholder="Password"
							        />
		              			</div>
						        
						        <button className="btn" disabled={isInvalid} type="submit">Sign Up</button>

						        {error && <p className="errors">{error.message}</p>}
							</form>
		              )
	    			
	    		}
	    	}
	    		
	    	</AuthConsumer>

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