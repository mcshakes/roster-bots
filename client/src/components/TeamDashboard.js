import React from "react";

class TeamDashboard extends React.Component {

	//component loads and sees the team name /show page
	// so team controller
	// will have roster data
	constructor(props) {
		super(props)

		this.state = {
			currentUser: this.props.email
		}
	}

	// hydrateStateEmail() {
	// 	for (let key in this.state) {
	// 		if (localStorage.hasOwnProperty(key)) {
	// 			let value = localStorage.getItem(key); 
	// 			console.log("VALUE", value)
	// 			try {
	// 				value = JSON.parse(value);
	// 				this.state({ [key]: value });
	// 			} 
	// 			catch (err) {
	// 				this.setState({ [key]: value });
	// 			}
	// 		}
	// 	}
	// }


	comoponentDidMount() {
		
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