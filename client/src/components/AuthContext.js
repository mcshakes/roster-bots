import React from 'react'

const AuthContext = React.createContext()


function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
