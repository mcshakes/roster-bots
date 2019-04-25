import React from "react";

const LogOutButton = (e) => (
	<button type="button" onClick={logOut()}>
		Log Out
	</button>
)


const logOut = () => {
	localStorage.removeItem("token");
}

export default LogOutButton;