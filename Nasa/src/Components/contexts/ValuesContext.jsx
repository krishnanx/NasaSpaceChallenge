import React,{createContext, useState}from 'react'
export const Value = createContext();
const ValuesContext = ({children}) => {
    const [values,setValues] = useState();
  return (
    <Value.Provider value={[values,setValues]}>
        {children}
    </Value.Provider>
  )
}

export default ValuesContext