import React from "react";

class Alternates extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const player = this.props.incoming;

		return (
			<div className="alternates">
				<p>{player.uuid}</p>
			</div>
		)
	}	
}

export default Alternates;