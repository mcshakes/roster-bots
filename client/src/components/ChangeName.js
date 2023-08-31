import React from "react";
import axios from "axios";

class ChangeName extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			value: " "
			
		};
	}

	handleSubmit = (event) => {
		this.props.handleDataUpdate(this.state.value)
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