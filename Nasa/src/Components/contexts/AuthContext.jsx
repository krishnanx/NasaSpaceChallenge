import React, { useState,createContext } from 'react'
export const Authentication = createContext();
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null)
  return (
    <Authentication.Provider value = {[user,setUser]}>
        {children}
    </Authentication.Provider>
  )
}

export default AuthContext