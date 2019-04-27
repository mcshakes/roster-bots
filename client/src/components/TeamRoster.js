import React from "react";



// const Starters = (player) => {
// 	return (<div>
// 				{player.name}
// 			</div>)
// }

// const Alternates = (player) => {
// 	return (<div>
// 				{player.name}
// 			</div>)
// }

		// {players && players.map((player, key) => {
		// 	count++
		// 	if (count <= 10) {
		// 		starters = <Starters incoming={player}/>
		// 	} else {
		// 		alternates = <Alternates incoming={player}/>
		// 	}
			
		// })}

class TeamRoster extends React.Component {	

	render() {
		let alternates;
		let starters;
		let count = 0;
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