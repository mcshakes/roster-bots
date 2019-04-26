import React from "react";

class AvailablePlayers extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			players: this.props.players
		}
	}

	// renderPlayers() {
	// 	this.state
	// }

	render() {
		return (
			<div className="available-pool">
				<h1>AvailablePlayers Portion</h1>
			</div>
		)
	}	
}

export default AvailablePlayers;