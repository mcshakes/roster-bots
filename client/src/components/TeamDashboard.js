import React from "react";
import axios from "axios";
import ChangeName from "./ChangeName";
import AvailablePlayers from "./AvailablePlayers";
import TeamRoster from "./TeamRoster";

class TeamDashboard extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			currentUserEmail: this.props.email,
			currentUser: "",
			showChangeForm: false,
			selectedPlayers: []
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

	handlePlayerSelection = (playerObject) => {
		const players = this.state.selectedPlayers

		console.log(this.state.currentUser)

		if (players) {
			players.push(playerObject)

			let rosterPlayers = this.state.currentUser.roster.players

			if (rosterPlayers) {
				console.log('filter')
				rosterPlayers = rosterPlayers.filter((player) => player.uuid !== playerObject.uuid)
			}

			this.setState({
				currentUser: {
					...this.state.currentUser,
					roster: {
						players: rosterPlayers
					}
				},
				selectedPlayers: players
			})
		}

	}

	render() {

		const teamName = this.state.currentUser.name;

		return (
			<main className="main">
				<header className="team-header">
					<div>
						<h1 className="team-name">Welcome {teamName}</h1>
						<button onClick={() => this.showNameChangeForm()}>Change Team Name</button>
					</div>
					<h3>Manage Your Team Below</h3>

					<div className="placement-name-form">
						{this.renderForm()}
					</div>
				</header>
				
				<div className="main-cards">
					<AvailablePlayers
						onPlayerSelect={this.handlePlayerSelection}
						players={this.state.currentUser.roster} />

					<TeamRoster players={this.state.selectedPlayers} />
				</div>
			</main>
		)
	}	
}

export default TeamDashboard;