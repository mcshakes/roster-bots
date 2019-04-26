import React from "react";
import axios from "axios";

class ChangeName extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			value: " ",
			// currentUserEmail: this.props.email
			currentUserID: this.props.currentUserID
		};
	}

	updateName() {
		axios
		  .put(`http://localhost:3001/api/v1/teams/${this.state.currentUserID}`, 
		  {	
		  	team: {
		  		name: this.state.value
		  	},
		  	headers: { 
		  		Accept: 'application/json',
		  		"Content-Type": "application/json" 
		  	},
		  })
		  .then(res => {
		  	console.log(res)
		  	
		   })
		   .catch(error => {
				console.log(error)
		   })
	}

	handleSubmit = (event) => {
		this.updateName();
		event.preventDefault();
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value })
	}


	render() {

		return (
			<div>
				<form className="update-name" onSubmit={this.handleSubmit}>
					<label>
						New Name
						<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label> 
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}	
}

export default ChangeName;