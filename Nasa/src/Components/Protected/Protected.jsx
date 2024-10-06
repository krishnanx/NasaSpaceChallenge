import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import {Authentication} from "../contexts/AuthContext"
const Protected = ({children}) => {
    const [user,setUser] = useContext(Authentication)
    if (!user) {
      // If no user, navigate to login page
      return <Navigate to="/" />;
    }
  
    // If user is authenticated, render the children (the protected component)
    return children;
  };


export default Protected