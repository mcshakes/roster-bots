import React from "react";
import Puff from "../assets/puff.svg";

class AvailablePlayers extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			players: props.players,
			currentPage: 0,
			selectedPlayers: []
		}
	}



	previousPage = () => {
		if (this.state.currentPage !== 1) {
			this.setState((prevState) => ({ currentPage: (prevState.currentPage - 1)}))
		}
	}

	nextPage = () => {
		if (this.state.currentPage + 1 < this.props.players.players.length) {
			this.setState((prevState) => ({ currentPage: (prevState.currentPage + 1)}))
		}
	}

	addPlayer = (player) => {
		const { onPlayerSelect } = this.props

		if (onPlayerSelect) {
			onPlayerSelect(player)
		}
	}



	render() {

		let returnOption;
		const { currentPage } = this.state

		const waitPlease = <div>
			                <p id="wait-message">Loading...</p>
			                <img src={Puff} />
			              </div>

		if (this.props.players === undefined) {
			returnOption = waitPlease 
		} else {

			const allPlayers = this.props.players.players


			let returnOption = (
				<div>
					<table>
						<tbody>
							<thead>
								<tr>
									<th>Name</th>
									<th>Strength</th>
									<th>Agility</th>
									<th>Speed</th>
								</tr>
							</thead>
							{allPlayers.slice((currentPage * 10), ((currentPage + 1) * 10)).map((player, idx) => {
								return (<tr key={player.uuid}>
											<td>{player.name}</td>
											<td>{player.strength}</td>
											<td>{player.agility}</td>
											<td>{player.speed}</td>
											<button onClick={() => this.addPlayer(player)}> + </button>

										</tr>)
							})}
						</tbody>
					</table>
					<button onClick={this.previousPage}>Previous Players</button>
					<button onClick={this.nextPage}>Next Players</button>
				</div>

			)

			return returnOption

		}

		return (
			<div className="available-pool">
				<h1>AvailablePlayers Portion</h1>

				{returnOption}
			</div>
		)
	}	
}

export default AvailablePlayers;