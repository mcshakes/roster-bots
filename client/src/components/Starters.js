import React from "react";

class Starters extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			list: []
		}
	}

	render() {
		const player = this.props.incoming;
		
		return (
			<div className="starters">

				<p>{player.uuid}</p>
			</div>
		)
	}	
}

export default Starters;