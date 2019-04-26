import React from "react";
import axios from "axios";

class TeamDashboard extends React.Component {

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


	componentDidMount() {
		console.log("HEY FROM DASHBOARD")
		this.getCollection()
	}

	getCollection() {
	  axios
	  .get(`http://localhost:3001/api/v1/teams/?email=${this.state.currentUser}`, 
	  {
	  	headers: { Accept: 'application/json' },
	  })
	  .then(res => {
	  	console.log(res)
	   })
	   .catch(error => {
			console.log(error)
	   })
	}

	render() {
		return (
			<div>
				<h1>Be secret!!!</h1>
			</div>
		)
	}	
}

export default TeamDashboard;