import React,{createContext, useState}from 'react'
export const Value = createContext();
const ValuesContext = ({children}) => {
    const [values,setValues] = useState( 
      {diet:"null",
      shower:"null",
      heat:"null",
      Gbill:0,
      Transport:"null",
      Vtype:"null",
      Tair:"null",
      VmD:0,
      Wbs:"null",
      Wbwc:0,
      Tv:0,
      NewClothes:0,
      InternetDaily:0});
    
  return (
    <Value.Provider value={[values,setValues]}>
        {children}
    </Value.Provider>
  )
}

export default ValuesContext