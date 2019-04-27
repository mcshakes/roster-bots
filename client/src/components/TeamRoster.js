import React from "react";

class TeamRoster extends React.Component {


	render() {
		const { players } = this.props;
		return (
			<div className="roster">
				<div className="starters">
					{players && players.map((player, key) => {
						return (
							<div key={player.uuid}>
								{player.name}
							</div>
						)
					})}
				</div>
				<div className="alternates">
					
				</div>
			</div>
		)
	}	
}

export default TeamRoster;