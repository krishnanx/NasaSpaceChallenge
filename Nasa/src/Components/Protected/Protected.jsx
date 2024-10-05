import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import {Authentication} from "../contexts/AuthContext"
const Protected = ({children}) => {
    const [user,setUser] = useContext(Authentication)
    if(user){
        return <Navigate to="/Dashboard" />;
    }
    else{
        return <Navigate to="/"/>
    }
  return (
    <div>Protected</div>
  )
}

export default Protected