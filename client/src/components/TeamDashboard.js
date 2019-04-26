import React from "react";
import axios from "axios";
import ChangeName from "./ChangeName";

class TeamDashboard extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			currentUserEmail: this.props.email,
			currentUser: "",
			showChangeForm: false
		}
	}

	componentDidMount() {
		this.getCollection()
	}


	getCollection() {
	  axios
	  .get(`http://localhost:3001/api/v1/teams/?email=${this.state.currentUserEmail}`, 
	  {
	  	headers: { Accept: 'application/json' },
	  })
	  .then(res => {
	  		this.setState({
	  			currentUser: res.data
	  		})
	   })
	   .catch(error => {
			console.log(error)
	   })
	}

	showNameChangeForm() {
		this.setState({
			showChangeForm: true
		})
	}

	renderForm() {
		const id = this.state.currentUser.id

		if (this.state.showChangeForm) {
			return < ChangeName handleDataUpdate={this.handleNameUpdate} />
		}
	}

	handleNameUpdate = (newName) => {
		this.updateName(newName)

		this.setState(prevState => ({
			currentUser: {
				...prevState,
				name: newName
			}		
		}))
	}

	updateName = (newName) => {
		axios
		  .put(`http://localhost:3001/api/v1/teams/${this.state.currentUser.id}`, 
		  {	
		  	team: {
		  		name: newName
		  	}
		  },
		  {
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

	render() {

		const teamName = this.state.currentUser.name;

		return (
			<div>
				<h3>Manage Your Team Below</h3>

				<div>
					<h1 className="team-name">{teamName}</h1>
					<button onClick={() => this.showNameChangeForm()}>Change Team Name</button>
				</div>

				<div className="placement-name-form">
					{this.renderForm()}
				</div>

			</div>
		)
	}	
}

export default TeamDashboard;