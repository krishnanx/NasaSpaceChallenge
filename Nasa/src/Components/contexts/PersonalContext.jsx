import React, { createContext,useState } from 'react'
export const Personal = createContext()
const PersonalContext = ({children}) => {
    const [personal,setPersonal] = useState()
  return (
   <Personal.Provider value = {[personal,setPersonal]}>
        {children}
   </Personal.Provider>
  )
}

export default PersonalContext