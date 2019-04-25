import React from 'react'

const AuthContext = React.createContext()

// class AuthProvider extends React.Component {
// 	state = { isAuth: false }

// 	constructor() {
// 		super()		
// 	}

// 	componentDidMount() {
// 		console.log(this.props)
// 		if (this.state.isAuth !== this.props.value.isAuth) {
// 			this.setState({
// 				isAuth: this.props.value.isAuth
// 			})
// 		}
// 	} 

// 	render() {
// 		return (

// 			<AuthContext.Provider
// 				value={{ isAuth: this.state.isAuth}}
// 			>
				
// 				{this.props.children}
// 			</AuthContext.Provider>
// 		)
// 	}
// }

function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
