import React from "react";

class TeamDashboard extends React.Component {

	//component loads and sees the team name /show page
	// so team controller
	// will have roster data
	constructor(props) {
		super(props)
	}

	comoponentDidMount() {
		console.log(this.props)
	}

	render() {
		return (
			<div>
				<h1>Should Be secret!!!</h1>
			</div>
		)
	}	
}

export default TeamDashboard;