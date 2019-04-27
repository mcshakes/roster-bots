import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { SignUpLink } from '../SignUp';
import { AuthConsumer } from "../AuthContext";

const LogInPage = (props) => (
	<div>
		<h1>Log In</h1>
		<LoginForm setUserAuth={props.setUserAuth} />
		<SignUpLink />
	</div>
)

const INITIAL_STATE ={
	email: "",
	password: "",
	error: null,
	isAuthenticated: false
}

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE }
	}

	onSubmit = event => {
		const { email, password} = this.state;

		axios.post("api/v1/login", { 
											email: email,
											password: password
		})
		.then(res => {

			let userEmail = (JSON.parse(res.config.data)).email
			
			this.props.setUserAuth(
				{ token: res.data.auth_token , 
				  isAuth: true,
				  currentEmail: userEmail
				}
			)
		})
		.catch(error => {
			this.setState({ error });
		})

		event.preventDefault();
	}

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		const { email, password, error } = this.state;

	    const isInvalid = password === '' || email === '';

	    return (
	    	<AuthConsumer>
          {
            ({isAuth})=>{
              if(isAuth){
                return <Redirect to={{
                					pathname: "/admin-dashboard",
                					userData: { user: this.state }
                				}} 
                		/>
              }
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
	    	</AuthConsumer>
	    )
	}
}

export default LogInPage;

export { LoginForm }